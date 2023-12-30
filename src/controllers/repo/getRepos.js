const { RepoModel } = require("../../models/models");

const getRepos = async (req, res) => {
   try {
      const result = await RepoModel.find();
      res.status(200).send(result);
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = getRepos;
