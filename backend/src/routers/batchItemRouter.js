const express = require("express");
const batchItemController = require("../controllers/batchItem.controller");

const router = express.Router();

router.route("/").get(batchItemController.getAll);

router.route("/:id").get(batchItemController.getOne);

module.exports = router;
