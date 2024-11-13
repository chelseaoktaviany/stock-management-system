const Item = require("../models/item.model");

exports.getAll = async (req, res) => {
  try {
    const items = await Item.findAll();

    res.status(200).json({
      success: true,
      data: items,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      msg: "Unable to find all items",
    });
  }
};

exports.getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findOne({ where: { item_code: id } });

    if (!item) {
      res.status(404).json({
        success: false,
        msg: "Item not found",
      });
    }

    res.status(200).json({
      success: true,
      data: item,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      msg: "Unable to find item",
    });
  }
};

exports.createOne = async (req, res) => {
  const { item_code, name, uom } = req.body;
  try {
    const newItem = await Item.create({
      item_code: item_code,
      name: name,
      uom: uom,
    });

    res.status(200).json({
      success: true,
      msg: "Created a new item successfully",
      data: newItem,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      msg: "Unable to create a new item",
    });
  }
};
