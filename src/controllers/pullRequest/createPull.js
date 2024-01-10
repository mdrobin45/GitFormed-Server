const { PullReqModel, RepoModel } = require("../../models/models");

const createPull = async (req, res) => {
   try {
      const io = req.io;
      const pullReqDetails = req.body;
      const result = await PullReqModel(pullReqDetails).save();

      // Find repo watchers and notify them - socket.io
      if (result._id) {
         const repository = await RepoModel.findById(pullReqDetails.repo);
         const watchers = repository.repoWatchers;
         watchers.map((watcherId) => {
            io.to(watcherId).emit("pull_notification", "Pull request created");
         });
      }
      res.status(200).json({ message: "Pull Request Created", id: result._id });
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = createPull;
