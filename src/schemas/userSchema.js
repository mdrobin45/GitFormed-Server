const mongoose = require("mongoose");

// User schema
const userSchema = mongoose.Schema({
   username: { type: String, required: true },
   email: { type: String, required: true },
});

// Export Schema
module.exports = userSchema;
