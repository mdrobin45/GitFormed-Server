const express = require("express");
const createRepo = require("../controllers/repo/createRepo");
const getRepos = require("../controllers/repo/getRepos");
const repoRouter = express.Router();

// Get all repo
repoRouter.get("/", getRepos);

// Create new repo
repoRouter.post("/", createRepo);

// Export routes
module.exports = repoRouter;
