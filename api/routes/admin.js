const express = require("express");
const router = express.Router();
const RoutersUser = require("../controllers/recruiterControllers");
const passport = require("passport");



//ADMIN A DEFINIR?
router.post("/register", RoutersUser.register);
router.post("/login",passport.authenticate("local"), RoutersUser.login);
router.post("/logout", RoutersUser.logout);




module.exports = router;