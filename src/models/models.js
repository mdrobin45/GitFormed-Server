const mongoose = require("mongoose");
const repoSchema = require("../schemas/repoSchema");
const pullReqSchema = require("../schemas/pullReqSchema");
const userSchema = require("../schemas/userSchema");

// Create models
const RepoModel = mongoose.model("Repository", repoSchema);
const PullReqModel = mongoose.model("PullRequest", pullReqSchema);
const UserModel = mongoose.model("Users", userSchema);

// Export models
module.exports = { RepoModel, PullReqModel, UserModel };
