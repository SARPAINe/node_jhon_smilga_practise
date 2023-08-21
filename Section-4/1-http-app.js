const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("./index.html", { encoding: "utf-8" });
console.log(homePage);

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        // console.log(req.method);
        // console.log(req.url);
        // fs.writeFileSync("request.txt", JSON.stringify(req));
        //text/plain sends plain text
        res.write(homePage);
        res.end();
    } else {
        res.end("<h1>Not home page</h1>");
    }
});

server.listen(5000);
