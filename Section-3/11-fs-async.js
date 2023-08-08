const { readFile, writeFile } = require("fs");

console.log("starting task");

readFile("./content/first.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const res1 = data;
        readFile("./content/second.txt", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const res2 = data;
                writeFile(
                    "./content/result-async.txt",
                    `Resutl is ${res1} and ${res2}`,
                    (err) => {
                        if (err) console.log(err);
                        console.log("done with task");
                    }
                );
            }
        });
    }
});
console.log("starting next task");
