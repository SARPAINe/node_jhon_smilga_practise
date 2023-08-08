const path = require("path");

console.log(path.sep);
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);
console.log(path.basename(filePath));

const absolutePath = path.resolve(
    __dirname,
    "content",
    "subfolder",
    "test.txt"
);
console.log(absolutePath);
