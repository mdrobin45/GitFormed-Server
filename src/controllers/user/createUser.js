const { UserModel } = require("../../models/models");

const createUser = async (req, res) => {
   try {
      const userData = req.body;
      const result = await UserModel(userData).save();
      res.status(200).json({ message: "User Created", id: result._id });
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = createUser;
