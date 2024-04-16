const mongoose = require("mongoose");

const TestDBSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
  },
});

module.exports = mongoose.model("Test", TestDBSchema);
