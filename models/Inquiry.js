const mongoose = require("mongoose");

const validator = require("validator");

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
  },
  phnum: {
    type: Number,
    maxlength: 12,
    // minlength: 12,
  },
  message: {
    type: String,
    required: [true, "Please provide message"],
  },
});

module.exprots = mongoose.model("Inquiry", inquirySchema);
