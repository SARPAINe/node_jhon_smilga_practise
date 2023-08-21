// const name = require("./4-names");
// const greetings = require("./5-utils");
// const alternative = require("./6-alternative-export");
// console.log(__dirname);
// greetings.sayHi(name);
// console.log(alternative);

// const os = require("os");
// console.log(os.uptime());

const { createReadStream } = require("fs");

const stream = createReadStream("./content/big.txt", {
    highWaterMark: 9000,
    // encoding: "utf-8",
});

stream.on("data", (result) => {
    console.log(result);
});

stream.on("error", (err) => {
    console.log(err);
});
