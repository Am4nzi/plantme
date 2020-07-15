const { Client } = require("pg");
const Pool = require("pg").Pool;

let connection;

//Use Heroku Postgres DB if local username is not present
//Otherwise, use local Postgres DB
if (process.env.USER !== "garethsmith") {
  connection = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  connection.connect();
} else {
  connection = new Pool({
    user: process.env.USER,
    host: "localhost",
    database: "plantsdb",
    password: process.env.PWD,
    port: 5432,
    ssl: process.env.DATABASE_URL ? true : false
  });
}

const getSizeMenuData = (request, response) => {
  connection.query(
    "SELECT * FROM plantsizemenu ORDER BY id ASC",
    (err, results) => {
      if (err) throw err;
      response.status(200).json(results.rows);
    }
  );
};

const getLightLevelMenuData = (request, response) => {
  connection.query(
    "SELECT * FROM lightlevelmenu ORDER BY id ASC",
    (err, results) => {
      if (err) throw err;
      response.status(200).json(results.rows);
    }
  );
};

const getEaseOfCareMenuData = (request, response) => {
  connection.query(
    "SELECT * FROM easeOfCareMenu ORDER BY id ASC",
    (err, results) => {
      if (err) throw err;
      response.status(200).json(results.rows);
    }
  );
};

const getPetSafeMenuData = (request, response) => {
  connection.query(
    "SELECT * FROM petSafeMenu ORDER BY id ASC",
    (err, results) => {
      if (err) throw err;
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getSizeMenuData,
  getLightLevelMenuData,
  getEaseOfCareMenuData,
  getPetSafeMenuData
};
