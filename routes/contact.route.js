const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.controller");

router.get("/", contactController.getContacts);

router.post("/", contactController.create);

router.get("/:id", contactController.getContact);

router.patch("/:id", contactController.updateById);

router.delete("/:id", contactController.deleteById);

module.exports = router;
