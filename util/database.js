if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const db = process.env.DB;

const myslq = require("mysql2");

const pool = myslq.createPool({
  host: "localhost",
  user: "root",
  database: "node-shop",
  password: db,
});

module.exports = pool.promise();
