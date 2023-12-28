const express = require("express");
const createPull = require("../controllers/pullRequest/createPull");
const pullReqRouter = express.Router();

// Create pull request
pullReqRouter.post("/", createPull);

// Export routes
module.exports = pullReqRouter;
