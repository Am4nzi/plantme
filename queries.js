const Pool = require("pg").Pool;

let connection;

connection = new Pool({
  user: process.env.USER,
  host: "localhost",
  database: "plantsdb",
  password: process.env.PWD,
  port: 5432,
  ssl: process.env.DATABASE_URL ? true : false
});

//Comment out above and uncomment below if uploading to Heroku
// const { Client } = require("pg");
// connection = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// }

const getMenuTitles = (request, response) => {
  connection.query(
    "SELECT * FROM menuTitles ORDER BY id ASC",
    (err, results) => {
      if (err) throw err;
      response.status(200).json(results.rows);
    }
  );
};

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

const getStepperText = (request, response) => {
  connection.query(
    "SELECT * FROM stepperText ORDER BY id ASC",
    (err, results) => {
      if (err) throw err;
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getMenuTitles,
  getSizeMenuData,
  getLightLevelMenuData,
  getEaseOfCareMenuData,
  getPetSafeMenuData,
  getStepperText
};
