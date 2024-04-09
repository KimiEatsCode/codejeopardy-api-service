const dotenv = require("dotenv");

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: "./config.env" });
} else {
  dotenv.config();
}

const config = {
  db: {
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
  },
};

module.exports = config;
