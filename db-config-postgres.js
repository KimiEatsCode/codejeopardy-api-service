// require("dotenv").config({ path: "config.env" });
import { config } from 'dotenv'; config();

  import { Client } from 'pg'

//Use connection string for production
//comment out LOCAL variables for production
const client = new Client ({
  connectionString: process.env.connectionString,
  // user: process.env.LOCALUSER,
  // host: process.env.LOCALHOST,
  // database: process.env.LOCALDATABASE,
  // password: process.env.LOCALPASSWORD,
  // port: process.env.LOCALPORT,
});

client.connect();

export { client };