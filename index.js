const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();
const database = require("./src/database");
const repoRouter = require("./src/routes/repositories");
const pullReqRouter = require("./src/routes/pullrequest");
const userRouter = require("./src/routes/user");
const socketConnection = require("./src/utils/socketConnection");

const app = express();
const server = createServer(app);
const io = new Server(server, {
   cors: {
      origin: process.env.LOCAL_SITE,
   },
});

const port = process.env.PORT || 3000;

// Use middlewares
app.use(
   cors({
      credentials: true,
      origin: process.env.LOCAL_SITE,
   })
);
app.use(express.json());

// Database connection
database();

// Middleware for socket io to access from anywhere
app.use((req, res, next) => {
   req.io = io;
   next();
});

// application routes
app.get("/", (req, res) => {
   res.send("Server running");
});
app.use("/repositories", repoRouter);
app.use("/pull-request", pullReqRouter);
app.use("/user", userRouter);

// Socket connection
socketConnection(io);

// Listen server
server.listen(port, () => {
   console.log(`Server is running in ${port}`);
});
