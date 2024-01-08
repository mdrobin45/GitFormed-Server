const { RepoModel } = require("../../models/models");

const sortRepo = async (req, res) => {
   try {
      let repo = req.query.repo || "all";
      const sortBy = req.query.sortBy || "latest";
      const myWatching = req.query.myWatching || false;

      // Query repositories
      query = repo === "all" ? {} : { repoUserEmail: repo };

      let response = await RepoModel.find(query);

      // Sort repositories
      if (sortBy === "latest") {
         response = response.sort((a, b) => a.createdAt - b.createdAt);
      } else if (sortBy === "alphabetical") {
         response = response.sort((a, b) =>
            a.repoName.toLowerCase().localeCompare(b.repoName.toLowerCase())
         );
      } else if (sortBy === "watchers") {
         response = response.sort(
            (a, b) => b.repoWatchers.length - a.repoWatchers.length
         );
      }

      res.status(200).json(response);
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = sortRepo;
