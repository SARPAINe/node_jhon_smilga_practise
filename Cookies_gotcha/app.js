require("dotenv").config();
require("express-async-errors");

//express
const express = require("express");
const app = express();

//rest of the packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//database
const connectDB = require("./db/connect");

//routers
const authRouter = require("./routes/authRoutes");
const cleanRouter = require("./routes/cleanDBRoutes");

//middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.static("./public"));
app.use(cors());

app.get("/", (req, res) => {
    res.send(`Welcome to e-commerce api`);
});

app.get("/api/v1", (req, res) => {
    // console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(`Welcome to e-commerce api`);
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/clean", cleanRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (err) {
        console.log(err);
    }
};

start();
