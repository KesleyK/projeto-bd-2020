const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.get("/findall", userController.getAll);

router.get("/findone/:id", userController.getOne);

router.post("/create", userController.create);

router.put("/update/:id", userController.update);

router.delete("/delete/:id", userController.deleteOne);

router.post("/login", userController.login);

module.exports = router;
