const pool = require("./config");

// const getCategoriesFromRender = (request, response) => {
//   pool.query("SELECT * FROM categories", (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

module.exports = {
  pool,
};
