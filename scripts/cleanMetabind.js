const fs = require("fs");
const path = require("path");

// Path to your notes folder
const NOTES_DIR = path.join(process.cwd(), "src", "site", "notes");

/**
 * Replace MetaBind elements with static placeholders.
 * Supports INPUT[], BUTTON[], SLIDER[], and inlineListSuggester.
 */
function replaceMetaBind(content) {
  return content
    // INPUT[...] or INPUT[...]:variable
    .replace(/INPUT\[[^\]]+\](?::([^\s\]]+))?/g, (_, varName) => `[Input: ${varName || "Field"}]`)
    // BUTTON[...] or BUTTON[...]:variable
    .replace(/BUTTON\[[^\]]+\](?::([^\s\]]+))?/g, (_, varName) => `[Button${varName ? `: ${varName}` : ""}]`)
    // SLIDER[...] or SLIDER[...]:variable
    .replace(/SLIDER\[[^\]]+\](?::([^\s\]]+))?/g, (_, varName) => `[Slider${varName ? `: ${varName}` : ""}]`)
    // Catch any remaining MetaBind-style inline functions if needed
    .replace(/([A-Z]+)\[[^\]]+\](?::([^\s\]]+))?/g, (_, type, varName) => `[${type}${varName ? `: ${varName}` : ""}]`);
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
      const content = fs.readFileSync(fullPath, "utf8");
      const cleaned = replaceMetaBind(content);
      fs.writeFileSync(fullPath, cleaned, "utf8");
    }
  });
}

// Run the script
walkDir(NOTES_DIR);
console.log("✅ Cleaned MetaBind elements from notes.");
