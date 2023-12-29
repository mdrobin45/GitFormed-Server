const { RepoModel } = require("../../models/models");

const findRepo = async (req, res) => {
   try {
      const { repoName } = req.query;
      const { email } = req.query;
      const result = await RepoModel.findOne({
         repoName,
         repoUserEmail: email,
      });
      if (result) {
         res.status(200).json({ exist: true });
      } else {
         res.json({ exist: false });
      }
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = findRepo;
