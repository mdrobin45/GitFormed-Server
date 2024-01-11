const { NotificationModel } = require("../../models/models");

const getNotification = async (req, res) => {
   try {
      const { userId } = req.query;
      const response = await NotificationModel.find({ userId });
      res.status(200).json({ response });
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = getNotification;
