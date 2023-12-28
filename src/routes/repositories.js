const express = require("express");
const createRepo = require("../controllers/createRepo");
const repoRouter = express.Router();

// Create new repo
repoRouter.post("/", createRepo);

// Export routes
module.exports = repoRouter;
