const { RepoModel, UserModel } = require("../../models/models");

const getUserByEmail = async (req, res) => {
   try {
      const { email } = req.params;
      const result = await UserModel.findOne({ email });
      res.status(200).send(result);
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = getUserByEmail;
