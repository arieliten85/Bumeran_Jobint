const express = require("express");
const router = express.Router();
const countryControllers = require("../controllers/countryControllers");


router.get("/all", countryControllers.getAll);
router.get("/:id", countryControllers.getOne);
router.post("/add", countryControllers.create);
router.put("/edit/:id", countryControllers.edit);
router.delete("/delete/:id", countryControllers.delete);

module.exports = router;