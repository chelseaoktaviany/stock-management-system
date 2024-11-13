const express = require("express");
const stockEntryController = require("../controllers/stockEntry.controller");

const router = express.Router();

router.route("/").get(stockEntryController.getAll);

router.route("/:id").get(stockEntryController.getOne);

module.exports = router;
