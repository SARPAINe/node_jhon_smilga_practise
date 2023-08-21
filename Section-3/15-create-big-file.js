const fs = require("fs");

for (let i = 0; i < 1000; i++) {
    fs.writeFileSync("./content/big.txt", `hello world ${i}\n`, { flag: "a" });
}
