const express = require("express");

const router = express.Router();

const stockEntryDetailController = require("../controllers/stockEntryDetail.controller");

router
  .route("/")
  .get(stockEntryDetailController.getAll)
  .post(stockEntryDetailController.createOne);
router.route("/:id").get(stockEntryDetailController.getOne);

module.exports = router;
