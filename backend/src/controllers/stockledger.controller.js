const StockLedger = require("../models/stockledger.model");
const Item = require("../models/item.model");

exports.getAll = async (req, res) => {
  try {
    const ledgers = await StockLedger.findAll({ include: Item });

    res.status(200).json({
      success: true,
      data: ledgers,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      msg: "Unable to find all data",
    });
  }
};

exports.getOne = async (req, res) => {
  const { id } = req.params;

  try {
    const ledger = await StockLedger.findOne({
      where: { id: id },
      include: Item,
    });

    if (!ledger) {
      res.status(404).json({
        success: false,
        msg: "Data not found",
      });
    }

    res.status(200).json({
      success: true,
      data: ledger,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      msg: "Unable to find a data",
    });
  }
};
