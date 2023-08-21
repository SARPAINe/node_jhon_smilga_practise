const http = require("http");

const logLoop = async () => {
    for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
            console.log(`${i} ${j}`);
        }
        await new Promise((resolve) => setTimeout(resolve, 0)); // Introduce a small delay
    }
};

const server = http.createServer(async (req, res) => {
    if (req.url === "/") {
        res.end("Welcome to the family");
        return;
    }
    if (req.url === "/about") {
        await logLoop();
        res.end("This is aobut page");
        return;
    }
    res.end(`<h1>Oops! Page doesn't exist</h1> <a href="/">Back home</a>`);
});

server.listen(5000);
