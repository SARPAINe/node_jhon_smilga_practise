const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(second);

writeFileSync(
    "./content/result.txt",
    `here is the results :${first} ${second}`,
    { flag: "a" }
);
