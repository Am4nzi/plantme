const { Client } = require("pg");
const Pool = require("pg").Pool;
//
// const client = new Client({
//   connectionString:
//     process.env.DATABASE_URL ||
//     "postgresql://postgres:password@localhost:5432/plantsdb",
//   ssl: process.env.DATABASE_URL ? true : false
// });
//
// client.connect();

let connection;

if (process.env.DATABASE_URL !== "postgres://garethsmith") {
  console.log("got here1: ", process.env.DATABASE_URL);
  connection = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  connection.connect();
} else {
  console.log("got here2");
  connection = new Pool({
    user: "garethsmith",
    host: "localhost",
    database: "plantsdb",
    password: "password",
    port: 5432
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
