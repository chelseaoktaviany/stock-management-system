const StockEntry = require("../models/stockentry.model");

exports.getAll = async (req, res) => {
  try {
    const entries = await StockEntry.findAll();

    res.status(200).json({
      success: true,
      data: entries,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      msg: "Unable to find all entries",
    });
  }
};

exports.getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const entry = await StockEntry.findOne({ where: { entry_id: id } });

    if (!entry) {
      res.status(404).json({
        success: false,
        msg: "Entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: entry,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      msg: "Unable to find entry",
    });
  }
};
