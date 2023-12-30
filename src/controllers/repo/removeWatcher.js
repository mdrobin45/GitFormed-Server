const { default: mongoose } = require("mongoose");
const { RepoModel } = require("../../models/models");

const removeWatcher = async (req, res) => {
   try {
      const { userId } = req.body;
      const { repoId } = req.query;

      const result = await RepoModel.updateOne(
         { _id: repoId },
         {
            $pull: { repoWatchers: userId },
         }
      );
      if (result.modifiedCount) {
         res.status(200).json({ message: "Watcher Removed" });
      } else {
         res.end();
      }
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = removeWatcher;
