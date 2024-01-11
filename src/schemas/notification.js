const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema(
   {
      userId: { type: String, required: true },
      repoId: { type: String, required: true },
      message: { type: String, default: "Pull request created" },
   },
   { timestamps: true }
);

module.exports = notificationSchema;
