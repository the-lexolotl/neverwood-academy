const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Path to your notes folder
const NOTES_DIR = path.join(process.cwd(), "src", "site", "notes");

/**
 * Replace MetaBind elements with their stored values from frontmatter or inline properties
 */
function replaceMetaBind(content, frontmatter) {
  return content
    // INPUT[...] or INPUT[...]:variable
    .replace(/INPUT\[[^\]]+\](?::([^\s\]]+))?/g, (_, varName) => {
      const value = varName ? frontmatter[varName] : undefined;
      return `[Input: ${value || "Field"}]`;
    })
    // BUTTON[...] or BUTTON[...]:variable
    .replace(/BUTTON\[[^\]]+\](?::([^\s\]]+))?/g, (_, varName) => {
      const value = varName ? frontmatter[varName] : undefined;
      return `[Button${value ? `: ${value}` : ""}]`;
    })
    // SLIDER[...] or SLIDER[...]:variable
    .replace(/SLIDER\[[^\]]+\](?::([^\s\]]+))?/g, (_, varName) => {
      const value = varName ? frontmatter[varName] : undefined;
      return `[Slider${value ? `: ${value}` : ""}]`;
    })
    // Fallback for other MetaBind-style elements
    .replace(/([A-Z]+)\[[^\]]+\](?::([^\s\]]+))?/g, (_, type, varName) => {
      const value = varName ? frontmatter[varName] : undefined;
      return `[${type}${value ? `: ${value}` : ""}]`;
    });
}

/**
 * Recursively walk a directory and process all Markdown files
 */
function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith(".md")) {
      const rawContent = fs.readFileSync(fullPath, "utf8");
      const parsed = matter(rawContent); // parse YAML frontmatter
      const cleanedContent = replaceMetaBind(parsed.content, parsed.data);
      const output = matter.stringify(cleanedContent, parsed.data); // keep frontmatter
      fs.writeFileSync(fullPath, output, "utf8");
    }
  });
}

// Run the script
walkDir(NOTES_DIR);
console.log("✅ Cleaned MetaBind elements using stored values from frontmatter.");
