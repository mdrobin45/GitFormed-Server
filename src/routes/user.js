const express = require("express");
const createUser = require("../controllers/user/createUser");
const findUser = require("../controllers/user/findUser");
const getUserByEmail = require("../controllers/user/getUserByEmail");
const userRouter = express.Router();

// Get user by email
userRouter.get("/:email", getUserByEmail);

// Find if user exist
userRouter.get("/", findUser);
// Add user
userRouter.post("/", createUser);

// Export router
module.exports = userRouter;
