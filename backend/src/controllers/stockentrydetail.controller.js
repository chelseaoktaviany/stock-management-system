const StockEntryDetail = require("../models/stockentrydetail.model");

exports.getAll = async (req, res) => {
  try {
    const details = await StockEntryDetail.findAll();

    res.status(200).json({
      success: true,
      data: details,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      msg: "Unable to find all details",
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { id } = req.params;

    const detail = await StockEntryDetail.findOne({
      where: { entry_detail_id: id },
    });

    if (!detail) {
      res.status(404).json({
        success: false,
        msg: "Detail not found",
      });
    }

    res.status(200).json({
      success: true,
      data: detail,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      msg: "Unable to find detail",
    });
  }
};

exports.createOne = async (req, res) => {
  const { entry_id, item_code, batch_id, expiry_date, qty } = req.body;

  try {
    const newDetail = await StockEntryDetail.create({
      entry_id: entry_id,
      item_code: item_code,
      batch_id: batch_id,
      expiry_date: expiry_date,
      qty: qty,
    });

    res.status(200).json({
      success: true,
      msg: "Created a new detail successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      msg: "Unable to create a new detail",
    });
  }
};
