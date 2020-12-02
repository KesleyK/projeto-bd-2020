const express = require("express");
const userTypeController = require("../controllers/userType");
const router = express.Router();

router.get("/findall", userTypeController.getAll);

router.get("/findone/:id", userTypeController.getOne);

router.post("/create", userTypeController.create);

router.put("/update/:id", userTypeController.update);

module.exports = router;
