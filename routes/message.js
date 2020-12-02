const express = require("express");
const messageController = require("../controllers/message");
const router = express.Router();

router.get("/findall", messageController.getAll);

router.get("/findall/institution/:id", messageController.getAllByInstitution);

router.get("/findone/:id", messageController.getOne);

router.post("/create", messageController.create);

router.put("/update/:id", messageController.update);

router.delete("/delete/:id", messageController.deleteOne);

module.exports = router;
