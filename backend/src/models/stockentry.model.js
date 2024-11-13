const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const StockEntry = sequelize.define(
  "StockEntry",
  {
    entry_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    tanggal: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ["IN", "OUT"],
      allowNull: false,
    },
  },
  { timestamps: false }
);

sequelize
  .sync()
  .then(() => {
    console.log("Table 'stockentries' created successfully");
  })
  .catch((err) => {
    console.error("Unable to create table: ", err);
  });

module.exports = StockEntry;
