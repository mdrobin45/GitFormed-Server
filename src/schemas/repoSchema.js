const mongoose = require("mongoose");

// Repo schema
const repoSchema = mongoose.Schema(
   {
      repoName: { type: String, required: true },
      repoUserEmail: { type: String, required: true },
      repoWatchers: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
         },
      ],
   },
   { timestamps: true }
);

// Export schema
module.exports = repoSchema;
