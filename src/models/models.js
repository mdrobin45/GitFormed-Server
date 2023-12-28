const mongoose = require("mongoose");
const repoSchema = require("../schemas/repoSchema");

// Create models
const repoModel = mongoose.model("Repository", repoSchema);

// Export models
module.exports = { repoModel };
