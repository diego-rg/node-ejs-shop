if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const db = process.env.DB;

const Sequelize = requrie("sequelize");

const sequelize = new Sequelize("node-shop", "root", db, {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
