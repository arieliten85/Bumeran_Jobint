const express = require("express");
const router = express.Router();
const recruiterControllers = require("../controllers/recruiterControllers");
const passport = require("passport");

router.post("/register", recruiterControllers.register);
router.post(
  "/login",
  passport.authenticate("local"),
  recruiterControllers.login
);
router.post("/logout", recruiterControllers.logout);
router.get("/all", recruiterControllers.getAll);
router.get("/:id", recruiterControllers.getOne);
router.post("/add", recruiterControllers.create);
router.put("/edit/:id", recruiterControllers.edit);
router.delete("/delete/:id", recruiterControllers.delete);

module.exports = router;
