const { RepoModel, UserModel } = require("../../models/models");

const sortRepo = async (req, res) => {
   try {
      let email = req.query.repo || "all";
      const sortBy = req.query.sortBy || "latest";
      const myWatching = req.query.myWatching || false;

      // Query repositories
      query = email === "all" ? {} : { repoUserEmail: email };

      // Find user id with email
      const user = await UserModel.findOne({ email });

      if (myWatching === "true") {
         console.log("querying watch");
         const watchingRepo = await RepoModel.find({
            repoWatchers: { $in: [user?._id] },
         });
         return res.status(200).json(watchingRepo);
      } else {
         console.log("querying filter");
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

         return res.status(200).json(response);
      }
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = sortRepo;
