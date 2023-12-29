const express = require("express");
const createUser = require("../controllers/user/createUser");
const findUser = require("../controllers/user/findUser");
const userRouter = express.Router();

// Find if user exist
userRouter.get("/", findUser);
// Add user
userRouter.post("/", createUser);

// Export router
module.exports = userRouter;
