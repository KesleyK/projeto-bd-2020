const express = require("express");
const institutionController = require("../controllers/institution");
const router = express.Router();

router.get("/findall", institutionController.getAll);

router.get("/findone/:id", institutionController.getOne);

router.post("/create", institutionController.create);

router.put("/update/:id", institutionController.update);

router.delete("/delete/:id", institutionController.deleteOne);

module.exports = router;
