const { PullReqModel } = require("../../models/models");

const createPull = async (req, res) => {
   try {
      const pullReqDetails = req.body;
      const result = await PullReqModel(pullReqDetails).save();
      res.status(200).json({ message: "Pull Request Created", id: result._id });
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = createPull;
