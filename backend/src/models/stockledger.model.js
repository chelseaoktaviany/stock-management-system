const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const Item = require("./item.model");
const BatchItem = require("./batchitem.model");

const StockLedger = sequelize.define(
  "StockLedger",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    last_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qty_in: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    qty_out: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    current_stock: {
      type: DataTypes.VIRTUAL,
      get() {
        if (this.qty_in) {
          return (this.current_stock = this.last_stock + this.qty_in);
        } else if (this.qty_out) {
          return (this.current_stock = this.last_stock - this.qty_out);
        }
      },
    },
  },
  {
    timestamps: false,
  }
);

StockLedger.belongsTo(Item, { foreignKey: "item_code" });
StockLedger.belongsTo(BatchItem, { foreignKey: "batch_id" });

sequelize
  .sync()
  .then(() => {
    console.log("Table 'stockledgers' created successfully");
  })
  .catch((err) => {
    console.error("Unable to create table: ", err);
  });

module.exports = StockLedger;
