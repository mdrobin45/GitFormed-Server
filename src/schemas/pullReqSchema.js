const mongoose = require("mongoose");

// Repo schema
const pullReqSchema = mongoose.Schema(
   {
      pullReqTitle: { type: String, required: true },
   },
   { timestamps: true }
);

// Export schema
module.exports = pullReqSchema;
