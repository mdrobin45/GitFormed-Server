const { PullReqModel } = require("../../models/models");

const getPullReqs = async (req, res) => {
   try {
      const result = await PullReqModel.find();
      res.status(200).send(result);
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = getPullReqs;
