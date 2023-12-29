const express = require("express");
const createRepo = require("../controllers/repo/createRepo");
const getRepos = require("../controllers/repo/getRepos");
const findRepo = require("../controllers/repo/findRepo");
const repoRouter = express.Router();

// Find repo with name
repoRouter.get("/find", findRepo);

// Get all repo
repoRouter.get("/", getRepos);

// Create new repo
repoRouter.post("/", createRepo);

// Export routes
module.exports = repoRouter;
