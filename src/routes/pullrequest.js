const express = require("express");
const createPull = require("../controllers/pullRequest/createPull");
const getPullReqs = require("../controllers/pullRequest/getPullReqs");
const pullReqRouter = express.Router();

// Get all pull request
pullReqRouter.get("/", getPullReqs);

// Create pull request
pullReqRouter.post("/", createPull);

// Export routes
module.exports = pullReqRouter;
