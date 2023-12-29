const { RepoModel } = require("../../models/models");

const getRepoByEmail = async (req, res) => {
   try {
      const { email } = req.query;
      const result = await RepoModel.find({ repoUserEmail: email }).populate(
         "repoWatchers"
      );
      res.status(200).send(result);
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = getRepoByEmail;
