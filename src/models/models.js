const mongoose = require("mongoose");
const repoSchema = require("../schemas/repoSchema");
const pullReqSchema = require("../schemas/pullReqSchema");

// Create models
const RepoModel = mongoose.model("Repository", repoSchema);
const PullReqModel = mongoose.model("PullRequest", pullReqSchema);

// Export models
module.exports = { RepoModel, PullReqModel };
