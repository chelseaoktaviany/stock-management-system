const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

// sequelize configuration
const sequelize = new Sequelize("stock_mgmnt_db", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
