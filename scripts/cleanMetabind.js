const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Path to your notes folder
const NOTES_DIR = path.join(process.cwd(), "src/site/notes");

/**
 * Extract inline properties from Markdown content
 * Format: key:: value
 */
function getInlineProperties(content) {
  const props = {};
  const regex = /^([\w-]+)::\s*(.+)$/gim;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const key = match[1].trim();
    const value = match[2].trim();
    props[key] = value;
  }
  return props;
}

/**
 * Replace MetaBind elements with stored frontmatter or inline property values
 */
function replaceMetaBind(content, frontmatter, inlineProps) {
  const getValue = (varName) => {
    if (!varName) return "Field";
    const key = Object.keys(frontmatter)
      .concat(Object.keys(inlineProps))
      .find(k => k.toLowerCase() === varName.toLowerCase());
    if (!key) return "Field";
    return frontmatter[key] || inlineProps[key];
  };

  return content
    // INPUT[...] syntax
    .replace(/INPUT\[[^\]]+\](?::([^\]]+))?/gi, (_, varName) => `[Input: ${getValue(varName)}]`)
    // BUTTON[...] syntax
    .replace(/BUTTON\[[^\]]+\](?::([^\]]+))?/gi, (_, varName) => {
      const val = getValue(varName);
      return `[Button${val ? `: ${val}` : ""}]`;
    })
    // SLIDER[...] syntax
    .replace(/SLIDER\[[^\]]+\](?::([^\]]+))?/gi, (_, varName) => {
      const val = getValue(varName);
      return `[Slider${val ? `: ${val}` : ""}]`;
    })
    // Fallback for other MetaBind-style elements
    .replace(/([A-Z]+)\[[^\]]+\](?::([^\]]+))?/gi, (_, type, varName) => {
      const val = getValue(varName);
      return `[${type}${val ? `: ${val}` : ""}]`;
    });
}

/**
 * Recursively process Markdown files in a directory
 */
function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith(".md")) {
      const rawContent = fs.readFileSync(fullPath, "utf8");
      const parsed = matter(rawContent); // parse YAML frontmatter
      const inlineProps = getInlineProperties(parsed.content);
      const cleanedContent = replaceMetaBind(parsed.content, parsed.data, inlineProps);
      const output = matter.stringify(cleanedContent, parsed.data); // keep frontmatter
      fs.writeFileSync(fullPath, output, "utf8");
    }
  });
}

// Run the script
walkDir(NOTES_DIR);
console.log("✅ Cleaned MetaBind elements using frontmatter and inline properties.");
