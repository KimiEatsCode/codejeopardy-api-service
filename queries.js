const pool = require("./config");

const getCategoriesFromRender = (request, response) => {
  pool.query("SELECT * FROM categories", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

pool.connect((err) => {
  if (err) throw err;
  console.log("Connect to PostgresSQL successfully!! Kimi");
});

module.exports = {
  getCategoriesFromRender,
  pool,
};
