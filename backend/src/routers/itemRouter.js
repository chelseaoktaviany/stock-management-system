const express = require("express");
const itemController = require("../controllers/item.controller");

const router = express.Router();

router.route("/").get(itemController.getAll).post(itemController.createOne);

router.route("/:id").get(itemController.getOne);

module.exports = router;
