const mongoose = require("mongoose");

const database = async () => {
   try {
      await mongoose.connect(`${process.env.MONGO_LOCAL_URI}`);
      console.log("Database connection successful!");
   } catch (err) {
      console.log(err);
      console.log("Database connection failed!");
   }
};

module.exports = database;
