const { UserModel } = require("../../models/models");

const findUser = async (req, res) => {
   try {
      const { username } = req.query;
      const result = await UserModel.findOne({ username });
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
module.exports = findUser;
