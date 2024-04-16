const MessageQ = require("../models/Inquiry");
const Test = require("../models/Test");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const createNewMessage = async (req, res) => {
  console.log(req.body);
  res.status(StatusCodes.CREATED).json({
    msg: " Your inquiry has been Submited. We'll Contact you soon..",
  });
};

const testFunc = async (req, res) => {
  console.log(req.body);

  const payload = await Test.create({
    name: "Amaan",
    email: "syedamaan7733@gmail.com",
  });
  res.status(StatusCodes.CREATED).json({ payload, msg: "submitted." });
};

module.exports = { createNewMessage, testFunc };
