const express = require("express");

const router = express.Router();

const stockLedgerController = require("../controllers/stockledger.controller");

router.route("/").get(stockLedgerController.getAll);
router.route("/:id").get(stockLedgerController.getOne);

module.exports = router;
