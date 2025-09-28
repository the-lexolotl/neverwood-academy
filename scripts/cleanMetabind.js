const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Path to your notes folder
const NOTES_DIR = path.join(process.cwd(), "src", "site/notes");

/**
 * Replace MetaBind elements with stored frontmatter values
 */
function replaceMetaBind(content, frontmatter) {
  // Helper to get value from frontmatter ignoring case
  const getValue = (varName) => {
    if (!varName) return "Field";
    const key = Object.keys(frontmatter).find(k => k.toLowerCase() === varName.toLowerCase());
    return key ? frontmatter[key] : "Field";
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
    // Catch-all for other MetaBind-style elements if needed
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
      const parsed = matter(rawContent); // parse frontmatter
      const cleanedContent = replaceMetaBind(parsed.content, parsed.data);
      const output = matter.stringify(cleanedContent, parsed.data); // keep frontmatter
      fs.writeFileSync(fullPath, output, "utf8");
    }
  });
}

// Run the script
walkDir(NOTES_DIR);
console.log("✅ Cleaned MetaBind elements using stored frontmatter values.");
