const express = require("express");
const cors = require("cors");
require("dotenv").config();
const database = require("./src/database");
const repoRouter = require("./src/routes/repositories");
const pullReqRouter = require("./src/routes/pullrequest");
const userRouter = require("./src/routes/user");

const app = express();

const port = process.env.PORT || 3000;

// Use middlewares
app.use(
   cors({
      credentials: true,
      origin: process.env.CORS_ORIGIN,
   })
);
app.use(express.json());

// Database connection
database();

// application routes
app.get("/", (req, res) => {
   res.send("Server running");
});
app.use("/repositories", repoRouter);
app.use("/pull-request", pullReqRouter);
app.use("/user", userRouter);

// Listen server
app.listen(port, () => {
   console.log(`Server is running in ${port} port`);
});
