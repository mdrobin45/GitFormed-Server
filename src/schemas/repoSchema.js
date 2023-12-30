const mongoose = require("mongoose");

// Repo schema
const repoSchema = mongoose.Schema(
   {
      repoName: { type: String, required: true },
      repoUsername: { type: String, required: true },
      repoUserEmail: { type: String, required: true },
      repoWatchers: [
         {
            type: String,
         },
      ],
   },
   { timestamps: true }
);

// Export schema
module.exports = repoSchema;
