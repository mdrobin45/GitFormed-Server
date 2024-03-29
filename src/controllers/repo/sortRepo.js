const { RepoModel, UserModel } = require("../../models/models");

const sortRepo = async (req, res) => {
   try {
      const email = req.query.email;
      let { repo, sortBy, myWatching, pageNumber } = req.query;

      repo = repo !== "null" ? repo : "all" || "all";
      sortBy = sortBy !== "null" ? sortBy : "latest" || "latest";
      myWatching = myWatching !== "null" ? myWatching : false || false;
      pageNumber = pageNumber !== "null" ? pageNumber : 1 || 1;
      pageNumber = parseFloat(pageNumber);

      // Pagination
      const perPage = 10;
      const startIndex = (pageNumber - 1) * perPage;
      const endIndex = startIndex + perPage;

      // Query repositories
      query = repo === "all" ? {} : { repoUserEmail: email };

      // Find user id with email
      const user = await UserModel.findOne({ email });

      if (myWatching === "true") {
         let response = await RepoModel.find({
            repoWatchers: { $in: [user?._id] },
         });

         // Total repositories count
         const countTotal = await RepoModel.countDocuments({
            repoWatchers: { $in: [user?._id] },
         });

         // Slice repositories base on pagination
         response = response.slice(startIndex, endIndex);

         // Return results
         return res.status(200).json({ total: countTotal, response });
      } else {
         let response = await RepoModel.find(query);

         // Total repositories count
         const countTotal = await RepoModel.countDocuments(query);

         // Show latest repo
         response.sort((a, b) => b.createdAt - a.createdAt);

         // Sort repositories
         if (sortBy === "latest") {
            response = response.sort((a, b) => b.createdAt - a.createdAt);
         } else if (sortBy === "alphabetical") {
            response = response.sort((a, b) =>
               a.repoName.toLowerCase().localeCompare(b.repoName.toLowerCase())
            );
         } else if (sortBy === "watchers") {
            response = response.sort(
               (a, b) => b.repoWatchers.length - a.repoWatchers.length
            );
         }

         // Slice repositories base on pagination
         response = response.slice(startIndex, endIndex);

         // Return results
         return res.status(200).json({ total: countTotal, response });
      }
   } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = sortRepo;
