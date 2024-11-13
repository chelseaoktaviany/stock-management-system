const BatchItem = require("../models/batchitem.model");

exports.getAll = async (req, res) => {
  try {
    const batchItems = await BatchItem.findAll();

    res.status(200).json({
      success: true,
      data: batchItems,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      msg: "Unable to find all batch items",
    });
  }
};

exports.getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const batchItem = await BatchItem.findOne({ where: { batch_id: id } });

    if (!batchItem) {
      res.status(404).json({
        success: false,
        msg: "Batch item not found",
      });
    }

    res.status(200).json({
      success: true,
      data: batchItem,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      msg: "Unable to find batch item",
    });
  }
};
