const express = require("express");
const router = express.Router();
const areaControllers = require("../controllers/areaControllers");


router.get("/all", areaControllers.getAll);
router.get("/:id", areaControllers.getOne);
router.post("/add", areaControllers.create);
router.put("/edit/:id", areaControllers.edit);
router.delete("/delete/:id", areaControllers.delete);

module.exports = router;