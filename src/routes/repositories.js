const express = require("express");
const createRepo = require("../controllers/repo/createRepo");
const getRepos = require("../controllers/repo/getRepos");
const findRepo = require("../controllers/repo/findRepo");
const getRepoByEmail = require("../controllers/repo/getRepoByEmail");
const updateWatcher = require("../controllers/repo/updateWatcher");
const removeWatcher = require("../controllers/repo/removeWatcher");
const repoRouter = express.Router();

// Find repo with name
repoRouter.get("/find", findRepo);

// Get repos by email
repoRouter.get("/user", getRepoByEmail);

// Get all repo
repoRouter.get("/", getRepos);

// Create new repo
repoRouter.post("/", createRepo);

// Update watchers
repoRouter.put("/watcher", updateWatcher);

// Remove watcher
repoRouter.put("/remove-watcher", removeWatcher);

// Export routes
module.exports = repoRouter;
