const client = require("../heroku-config-postgres");

async function getUsers() {
  const rows = await client.query(`SELECT * FROM users`);
  return {
    rows,
  };
}

module.exports = {
    getUsers
}