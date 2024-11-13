const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../config/db");

const Item = sequelize.define(
  "Item",
  {
    item_code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

sequelize
  .sync()
  .then(() => {
    console.log("Table 'items' created successfully");
  })
  .catch((err) => {
    console.error("Unable to create table: ", err);
  });

module.exports = Item;
