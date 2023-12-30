const { RepoModel } = require("../../models/models");

const updateWatcher = async (req, res) => {
   try {
      const { userId } = req.body;
      const { repoId } = req.query;
      const result = await RepoModel.updateOne(
         { _id: repoId },
         {
            $push: {
               repoWatchers: userId,
            },
         }
      );
      if (result.modifiedCount) {
         res.status(200).json({ message: "Watcher Added" });
      } else {
         res.end();
      }
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = updateWatcher;
