const fs = require("fs");
const path = require("path");
const slugify = require("@sindresorhus/slugify");
const markdownIt = require("markdown-it");
const matter = require("gray-matter");
const { parse } = require("node-html-parser");
const htmlMinifier = require("html-minifier-terser");
const Image = require("@11ty/eleventy-img");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const tocPlugin = require("eleventy-plugin-nesting-toc");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { headerToId, namedHeadingsFilter } = require("./src/helpers/utils");
const { userMarkdownSetup, userEleventySetup } = require("./src/helpers/userSetup");
const yaml = require("js-yaml");

// Tag regex
const tagRegex = /(^|\s|\>)(#[^\s!@#$%^&*()=+\.,\[{\]};:'"?><]+)(?!([^<]*>))/g;

// Preprocess files with JSON frontmatter
function preprocessMarkdownFiles() {
  const notesDir = "./src/site/notes";
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else if (file.endsWith('.md')) {
        try {
          let content = fs.readFileSync(filePath, 'utf8');
          let needsProcessing = false;
          let data, restOfContent;
          
          // Check if it starts with JSON frontmatter
          if (!content.trim().startsWith('---')) {
            const jsonMatch = content.match(/^\s*(\{[\s\S]*?\})\s*\n([\s\S]*)$/);
            if (jsonMatch) {
              let jsonStr = jsonMatch[1];
              restOfContent = jsonMatch[2];
              
              // Remove problematic escapes
              jsonStr = jsonStr.replace(/\\\|/g, '|');
              
              try {
                data = JSON.parse(jsonStr);
                needsProcessing = true;
              } catch (e) {
                console.warn(`Failed to parse JSON in ${filePath}:`, e.message);
              }
            }
          } else {
            // It has YAML frontmatter - check if it needs fixing
            const yamlMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
            if (yamlMatch) {
              const yamlContent = yamlMatch[1];
              restOfContent = yamlMatch[2];
              
              // Check if YAML contains unescaped backslashes in strings
              if (yamlContent.includes('\\|') || (yamlContent.includes('\\') && !yamlContent.includes('\\\\'))) {
                try {
                  // Try to parse existing YAML - if it fails, we need to fix it
                  data = yaml.load(yamlContent);
                  needsProcessing = true;
                } catch (e) {
                  // YAML is broken, try to fix by reading as lenient as possible
                  try {
                    // Replace unescaped single backslashes with double backslashes in the YAML string
                    const fixedYaml = yamlContent.replace(/([^\\])\\([^\\"])/g, '$1\\\\$2');
                    data = yaml.load(fixedYaml);
                    needsProcessing = true;
                  } catch (e2) {
                    console.warn(`Cannot fix YAML in ${filePath}:`, e2.message);
                  }
                }
              }
            }
          }
          
          if (needsProcessing && data) {
            // Recursively process strings to escape backslashes for YAML
            function escapeForYaml(obj) {
              if (typeof obj === 'string') {
                // Replace single backslashes with double backslashes
                // But don't double-escape already escaped ones
                return obj.replace(/\\/g, '\\\\');
              }
              if (Array.isArray(obj)) {
                return obj.map(escapeForYaml);
              }
              if (obj && typeof obj === 'object') {
                const result = {};
                for (const [key, value] of Object.entries(obj)) {
                  result[key] = escapeForYaml(value);
                }
                return result;
              }
              return obj;
            }
            
            const escapedData = escapeForYaml(data);
            
            // Convert to YAML with options that force proper quoting
            const yamlFrontMatter = "---\n" + yaml.dump(escapedData, {
              lineWidth: -1,
              noCompatMode: true,
              forceQuotes: true,
              quotingType: '"',
              flowLevel: -1
            }) + "---\n";
            const newContent = yamlFrontMatter + restOfContent;
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Fixed frontmatter in: ${filePath}`);
          }
        } catch (e) {
          console.warn(`Error processing ${filePath}:`, e.message);
        }
      }
    }
  }
  
  if (fs.existsSync(notesDir)) {
    processDirectory(notesDir);
  }
}

// Run preprocessing
preprocessMarkdownFiles();

module.exports = function (eleventyConfig) {
  // =========================
  // Basic config
  // =========================
  eleventyConfig.setLiquidOptions({ dynamicPartials: true });
  eleventyConfig.setLibrary("md", createMarkdownLib());
  eleventyConfig.addPlugin(faviconsPlugin, { outputDir: "dist" });
  eleventyConfig.addPlugin(tocPlugin, {
    ul: true,
    tags: ["h1", "h2", "h3", "h4", "h5", "h6"],
  });
  eleventyConfig.addPlugin(pluginRss, {
    posthtmlRenderOptions: { closingSingleTag: "slash", singleTags: ["link"] },
  });

  // =========================
  // Passthrough copy
  // =========================
  ["img", "scripts", "styles/_theme.*.css"].forEach(path =>
    eleventyConfig.addPassthroughCopy(`src/site/${path}`)
  );

  // =========================
  // Filters
  // =========================
  eleventyConfig.addFilter("isoDate", date => date?.toISOString());
  eleventyConfig.addFilter("link", str => str?.replace(/\[\[(.*?\|.*?)\]\]/g, (m, p1) => {
    if (p1.includes("],[") || p1.includes('"$"')) return m;
    const [fileLink, linkTitle] = p1.split("|");
    return getAnchorLink(fileLink, linkTitle);
  }));
  eleventyConfig.addFilter("taggify", str => str?.replace(tagRegex, (m, pre, tag) =>
    `${pre}<a class="tag" onclick="toggleTagSearch(this)" data-content="${tag}">${tag}</a>`
  ));
  eleventyConfig.addFilter("searchableTags", str => {
    const match = str?.match(tagRegex);
    return match ? match.map(m => `"${m.split("#")[1]}"`).join(", ") + "," : "";
  });
  eleventyConfig.addFilter("hideDataview", str =>
    str?.replace(/\(\S+\:\:(.*)\)/g, (_, value) => value.trim())
  );
  eleventyConfig.addFilter("dateToZulu", date => {
    try { return new Date(date).toISOString("dd-MM-yyyyTHH:mm:ssZ"); } catch { return ""; }
  });
  eleventyConfig.addFilter("jsonify", variable => JSON.stringify(variable) || '""');
  eleventyConfig.addFilter("validJson", variable => {
    if (Array.isArray(variable)) return variable.map(x => x.replaceAll("\\", "\\\\")).join(",");
    if (typeof variable === "string") return variable.replaceAll("\\", "\\\\");
    return variable;
  });

  // =========================
  // Transforms
  // =========================
  eleventyConfig.addTransform("dataview-js-links", dataviewJsLinksTransform);
  eleventyConfig.addTransform("callout-block", calloutBlockTransform);
  eleventyConfig.addTransform("picture", pictureTransform);
  eleventyConfig.addTransform("table", tableTransform);
  eleventyConfig.addTransform("htmlMinifier", htmlMinifierTransform);

  // =========================
  // User custom setup
  // =========================
  userEleventySetup(eleventyConfig);

  // =========================
  // Return Eleventy config object
  // =========================
  return {
    dir: { input: "src/site", output: "dist", data: "_data" },
    templateFormats: ["njk", "md", "11ty.js", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: false,
    passthroughFileCopy: true,
  };
};

// =========================
// Markdown library setup
// =========================
function createMarkdownLib() {
  const md = markdownIt({ breaks: true, html: true, linkify: true })
    .use(require("markdown-it-anchor"), { slugify: headerToId })
    .use(require("markdown-it-mark"))
    .use(require("markdown-it-footnote"))
    .use(namedHeadingsFilter)
    .use(userMarkdownSetup)
    .use(require("markdown-it-attrs"))
    .use(require("markdown-it-task-checkbox"), { disabled: true, divWrap: false, divClass: "checkbox", idPrefix: "cbx_", ulClass: "task-list", liClass: "task-list-item" })
    .use(require("markdown-it-plantuml"), { openMarker: "```plantuml", closeMarker: "```" })
    .use(require("markdown-it-mathjax3"), { tex: { inlineMath: [["$", "$"]] }, options: { skipHtmlTags: { "[-]": ["pre"] } } })
    .use(md => {
      // Custom fence rule for mermaid, transclusion, and callouts
      const origFenceRule = md.renderer.rules.fence || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options, env, self));
      md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        const token = tokens[idx];
        const code = token.content.trim();
        if (token.info === "mermaid") return `<pre class="mermaid">${code}</pre>`;
        if (token.info === "transclusion") return `<div class="transclusion">${md.render(code)}</div>`;
        if (token.info.startsWith("ad-")) return renderAdCallout(token.info, code, md);
        return origFenceRule(tokens, idx, options, env, slf);
      };
      // Image rule with width/metadata support
      const defaultImageRule = md.renderer.rules.image || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options, env, self));
      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const [fileName, ...widthMeta] = tokens[idx].content.split("|");
        const last = widthMeta[widthMeta.length - 1];
        const width = !isNaN(last) ? last : null;
        let metaData = widthMeta.length > 1 ? widthMeta.slice(0, widthMeta.length - 1).join(" ") : "";
        if (!isNaN(last)) metaData = metaData.trim();
        if (width) tokens[idx].attrSet("width", `${width}px`);
        return defaultImageRule(tokens, idx, options, env, self);
      };
      // Link rule for external links
      const defaultLinkRule = md.renderer.rules.link_open || ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options, env, self));
      md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        if (tokens[idx].attrIndex("target") < 0) tokens[idx].attrPush(["target", "_blank"]);
        if (tokens[idx].attrIndex("class") < 0) tokens[idx].attrPush(["class", "external-link"]);
        return defaultLinkRule(tokens, idx, options, env, self);
      };
    });
  return md;
}

// =========================
// Transform functions
// =========================
function dataviewJsLinksTransform(str) {
  const parsed = parse(str);
  for (const a of parsed.querySelectorAll("a[data-href].internal-link")) {
    const { attributes, innerHTML } = getAnchorAttributes(a.getAttribute("data-href"), a.innerHTML);
    Object.entries(attributes).forEach(([k, v]) => a.setAttribute(k, v));
    a.innerHTML = innerHTML;
  }
  return parsed.innerHTML;
}

function calloutBlockTransform(str) {
  const parsed = parse(str);

  const transformCalloutBlocks = (
    blockquotes = parsed.querySelectorAll("blockquote")
  ) => {
    for (const blockquote of blockquotes) {
      transformCalloutBlocks(blockquote.querySelectorAll("blockquote"));

      let content = blockquote.innerHTML;

      let titleDiv = "";
      let calloutType = "";
      let calloutMetaData = "";
      let isCollapsable;
      let isCollapsed;
      const calloutMeta = /\[!([\w-]*)\|?(\s?.*)\](\+|\-){0,1}(\s?.*)/;
      if (!content.match(calloutMeta)) {
        continue;
      }

      content = content.replace(
        calloutMeta,
        function (metaInfoMatch, callout, metaData, collapse, title) {
          isCollapsable = Boolean(collapse);
          isCollapsed = collapse === "-";
          const titleText = title.replace(/(<\/{0,1}\w+>)/, "")
            ? title
            : `${callout.charAt(0).toUpperCase()}${callout
              .substring(1)
              .toLowerCase()}`;
          const fold = isCollapsable
            ? `<div class="callout-fold"><i icon-name="chevron-down"></i></div>`
            : ``;

          calloutType = callout;
          calloutMetaData = metaData;
          titleDiv = `<div class="callout-title"><div class="callout-title-inner">${titleText}</div>${fold}</div>`;
          return "";
        }
      );

      /* Hacky fix for callouts with only a title:
      This will ensure callout-content isn't produced if
      the callout only has a title, like this:
      ```md
      > [!info] i only have a title
      ```
      Not sure why content has a random <p> tag in it,
      */
      if (content === "\n<p>\n") {
        content = "";
      }
      let contentDiv = content ? `\n<div class="callout-content">${content}</div>` : "";

      blockquote.tagName = "div";
      blockquote.classList.add("callout");
      blockquote.classList.add(isCollapsable ? "is-collapsible" : "");
      blockquote.classList.add(isCollapsed ? "is-collapsed" : "");
      blockquote.setAttribute("data-callout", calloutType.toLowerCase());
      calloutMetaData && blockquote.setAttribute("data-callout-metadata", calloutMetaData);
      blockquote.innerHTML = `${titleDiv}${contentDiv}`;
    }
  };

  transformCalloutBlocks();

  return str && parsed.innerHTML;
}

function pictureTransform(str) {
  if (process.env.USE_FULL_RESOLUTION_IMAGES === "true") return str;
  const parsed = parse(str);
  for (const img of parsed.querySelectorAll(".cm-s-obsidian img")) {
    const src = img.getAttribute("src");
    if (!src.startsWith("/") || src.endsWith(".svg")) continue;
    try {
      const meta = transformImage(`./src/site${decodeURI(src)}`, img.classList.value, img.getAttribute("alt"), ["(max-width: 480px)", "(max-width: 1024px)"]);
      fillPictureSourceSets(src, img.classList.value, img.getAttribute("alt"), meta, img.getAttribute("width") || '', img);
    } catch {}
  }
  return parsed.innerHTML;
}

function tableTransform(str) {
  const parsed = parse(str);
  for (const t of parsed.querySelectorAll(".cm-s-obsidian > table")) {
    const inner = t.innerHTML;
    t.tagName = "div";
    t.classList.add("table-wrapper");
    t.innerHTML = `<table>${inner}</table>`;
  }
  // dataview tables
  for (const t of parsed.querySelectorAll(".cm-s-obsidian > .block-language-dataview > table")) {
    t.classList.add("dataview", "table-view-table");
    t.querySelector("thead")?.classList.add("table-view-thead");
    t.querySelector("tbody")?.classList.add("table-view-tbody");
    t.querySelectorAll("thead > tr")?.forEach(tr => tr.classList.add("table-view-tr-header"));
    t.querySelectorAll("thead > tr > th")?.forEach(th => th.classList.add("table-view-th"));
  }
  return parsed.innerHTML;
}

function htmlMinifierTransform(content, outputPath) {
  if ((process.env.NODE_ENV === "production" || process.env.ELEVENTY_ENV === "prod") && outputPath?.endsWith(".html")) {
    return htmlMinifier.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      preserveLineBreaks: true,
      minifyCSS: true,
      minifyJS: true,
      keepClosingSlash: true,
    });
  }
  return content;
}

// =========================
// Helper functions
// =========================
function transformImage(src, cls, alt, sizes, widths = ["500", "700", "auto"]) {
  const options = { widths, formats: ["webp", "jpeg"], outputDir: "./dist/img/optimized", urlPath: "/img/optimized" };
  Image(src, options);
  return Image.statsSync(src, options);
}

function fillPictureSourceSets(src, cls, alt, meta, width, imageTag) {
  imageTag.tagName = "picture";
  let html = `<source media="(max-width:480px)" srcset="${meta.webp[0].url}" type="image/webp"/><source media="(max-width:480px)" srcset="${meta.jpeg[0].url}"/>`;
  if (meta.webp?.[1]?.url) html += `<source media="(max-width:1920px)" srcset="${meta.webp[1].url}" type="image/webp"/>`;
  if (meta.jpeg?.[1]?.url) html += `<source media="(max-width:1920px)" srcset="${meta.jpeg[1].url}"/>`;
  html += `<img class="${cls}" src="${src}" alt="${alt}" width="${width}"/>`;
  imageTag.innerHTML = html;
}

function getAnchorLink(filePath, linkTitle) {
  const { attributes, innerHTML } = getAnchorAttributes(filePath, linkTitle);
  return `<a ${Object.entries(attributes).map(([k, v]) => `${k}="${v}"`).join(" ")}>${innerHTML}</a>`;
}

function getAnchorAttributes(filePath, linkTitle) {
  let [fileName, header = ""] = filePath.replaceAll("&amp;", "&").split("#");
  const headerLinkPath = header ? `#${headerToId(header)}` : "";
  let noteIcon = process.env.NOTE_ICON_DEFAULT;
  let permalink = `/notes/${slugify(filePath)}`;
  let deadLink = false;
  try {
    const startPath = "./src/site/notes/";
    const fullPath = fileName.endsWith(".md") ? `${startPath}${fileName}` : `${startPath}${fileName}.md`;
    const file = fs.readFileSync(fullPath, "utf8");
    const frontMatter = matter(file).data;
    if (frontMatter.permalink) permalink = frontMatter.permalink;
    if (frontMatter.tags?.includes("gardenEntry")) permalink = "/";
    if (frontMatter.noteIcon) noteIcon = frontMatter.noteIcon;
  } catch {
    deadLink = true;
  }
  if (deadLink) {
    return { attributes: { class: "internal-link is-unresolved", href: "/404", target: "" }, innerHTML: linkTitle || fileName };
  }
  return {
    attributes: { class: "internal-link", target: "", "data-note-icon": noteIcon, href: `${permalink}${headerLinkPath}` },
    innerHTML: linkTitle || fileName
  };
}

// Callout helper
function renderAdCallout(type, code, md) {
  const lines = code.split("\n");
  let title, icon, collapsible = false, collapsed = true, color, nbLinesToSkip = 0;
  for (let i = 0; i < 4; i++) {
    const line = lines[i]?.trim().toLowerCase();
    if (!line) continue;
    if (line.startsWith("title:")) { title = line.substring(6); nbLinesToSkip++; }
    if (line.startsWith("icon:")) { icon = line.substring(5); nbLinesToSkip++; }
    if (line.startsWith("collapse:")) { collapsible = true; collapsed = line.substring(9).trim().toLowerCase() !== "open"; nbLinesToSkip++; }
    if (line.startsWith("color:")) { color = line.substring(6); nbLinesToSkip++; }
  }
  const foldDiv = collapsible ? `<div class="callout-fold"><svg>...</svg></div>` : "";
  const titleDiv = title ? `<div class="callout-title"><div class="callout-title-inner">${title}</div>${foldDiv}</div>` : "";
  const collapseClasses = (collapsible ? "is-collapsible" : "") + (collapsible && collapsed ? " is-collapsed" : "");
  return `<div data-callout-metadata class="callout ${collapseClasses}" data-callout="${type.substring(3)}">${titleDiv}<div class="callout-content">${md.render(lines.slice(nbLinesToSkip).join("\n"))}</div></div>`;
}
