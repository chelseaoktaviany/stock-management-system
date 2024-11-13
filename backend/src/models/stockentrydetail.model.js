const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const StockEntry = require("./stockentry.model");
const Item = require("./item.model");
const BatchItem = require("./batchitem.model");

const StockEntryDetail = sequelize.define(
  "StockEntryDetail",
  {
    entry_detail_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    entry_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: StockEntry,
        key: "entry_id",
      },
    },
    item_code: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Item,
        key: "item_code",
      },
    },
    batch_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: BatchItem,
        key: "batch_id",
      },
    },
    expiry_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

StockEntryDetail.belongsTo(StockEntry, { foreignKey: "entry_id" });
StockEntryDetail.belongsTo(Item, { foreignKey: "item_code" });
StockEntryDetail.belongsTo(BatchItem, { foreignKey: "batch_id" });

sequelize
  .sync()
  .then(() => {
    console.log("Table 'stockentrydetails' created successfully");
  })
  .catch((err) => {
    console.error("Unable to create table: ", err);
  });

module.exports = StockEntryDetail;
