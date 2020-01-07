const express = require("express");
const {
  register,
  login,
  getMe,
  updateDetails,
  updatePassword,
  logout
} = require("../controllers/auth");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
// router.get("/logout", logout); only for cookie login
router.get("/me", protect, getMe);
router.put("/updatedetails", protect, updateDetails);
router.put("/updatepassword", protect, updatePassword);

module.exports = router;
