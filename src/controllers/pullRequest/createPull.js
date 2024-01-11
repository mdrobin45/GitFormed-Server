const { PullReqModel, RepoModel } = require("../../models/models");

const createPull = async (req, res) => {
   try {
      const pullReqDetails = req.body;
      const result = await PullReqModel(pullReqDetails).save();
      if (result._id) {
         const repository = await RepoModel.findById(result?.repo);
         res.status(200).json(repository);
         return;
      }
      res.status(200).end();
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = createPull;
