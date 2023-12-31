const { RepoModel } = require("../../models/models");

const getUserWatchingRepo = async (req, res) => {
   try {
      const { userId } = req.query;
      const result = await RepoModel.find({
         repoWatchers: { $in: [userId] },
      });
      res.status(200).send(result);
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = getUserWatchingRepo;
