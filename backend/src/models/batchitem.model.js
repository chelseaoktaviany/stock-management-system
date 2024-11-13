const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const Item = require("./item.model");

const BatchItem = sequelize.define(
  "BatchItem",
  {
    batch_id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
    item_code: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Item,
        key: "item_code",
      },
    },
    expiry_date: { type: DataTypes.DATEONLY, allowNull: false },
  },
  { timestamps: false }
);

BatchItem.belongsTo(Item, { foreignKey: "item_code" });

sequelize
  .sync()
  .then(() => {
    console.log("Table 'batchitems' created successfully");
  })
  .catch((err) => {
    console.error("Unable to create table: ", err);
  });

module.exports = BatchItem;
