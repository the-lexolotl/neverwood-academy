const fs = require("fs");
const path = require("path");

// adjust this if your notes live in a different folder
const NOTES_DIR = path.join(process.cwd(), "content");

function replaceMetaBind(content) {
  return content
    .replace(/{{button:(.*?)}}/g, "[Button: $1]")
    .replace(/{{input:(.*?)}}/g, "[Input: $1]")
    .replace(/{{slider:(.*?)}}/g, "[Slider: $1]");
}

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

walkDir(NOTES_DIR);
console.log("✅ Cleaned MetaBind elements from notes.");
