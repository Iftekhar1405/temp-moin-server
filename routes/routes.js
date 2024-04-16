const router = require("express").Router();

const {
  createNewMessage,
  testFunc,
} = require("../controllers/inquiryController");

router.route("/querry").post(createNewMessage);
router.route("/test").post(testFunc);

module.exports = router;
