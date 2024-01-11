const { NotificationModel } = require("../../models/models");

const saveNotification = async (req, res) => {
   try {
      const notifyData = req.body;
      await NotificationModel(notifyData).save();
      res.status(200).json({ message: "Notification added" });
   } catch {
      res.status(500).json({ error: "Internal server error!" });
   }
};

// Export function
module.exports = saveNotification;
