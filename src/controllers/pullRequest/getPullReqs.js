const { PullReqModel } = require("../../models/models");

const getPullReqs = async (req, res) => {
   try {
      const { repoId } = req.query;
      const result = await PullReqModel.find({ repo: repoId });
      res.status(200).send(result);
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = getPullReqs;
