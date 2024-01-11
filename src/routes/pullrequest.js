const express = require("express");
const createPull = require("../controllers/pullRequest/createPull");
const getPullReqs = require("../controllers/pullRequest/getPullReqs");
const saveNotification = require("../controllers/pullRequest/notification");
const getNotification = require("../controllers/pullRequest/getNotification");
const pullReqRouter = express.Router();

// Get notification
pullReqRouter.get("/getNotification", getNotification);

// Get all pull request
pullReqRouter.get("/", getPullReqs);

// Create pull request
pullReqRouter.post("/", createPull);

// Add notification
pullReqRouter.post("/notification", saveNotification);

// Export routes
module.exports = pullReqRouter;
