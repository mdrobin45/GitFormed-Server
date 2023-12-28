const { RepoModel } = require("../../models/models");

const createRepo = async (req, res) => {
   try {
      const repoDetails = req.body;
      const result = await RepoModel(repoDetails).save();
      res.status(200).json({ message: "Repository Created", id: result._id });
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = createRepo;
