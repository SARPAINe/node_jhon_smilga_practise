const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to the family");
        return;
    }
    if (req.url === "/about") {
        res.end("This is aobut page");
        return;
    }
    res.end(`<h1>Oops! Page doesn't exist</h1> <a href="/">Back home</a>`);
});

server.listen(5000);
