const express = require("express");
const createUser = require("../controllers/user/createUser");
const userRouter = express.Router();

// Add user
userRouter.post("/", createUser);

// Export router
module.exports = userRouter;
