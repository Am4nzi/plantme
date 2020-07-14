const { Client } = require("pg");

const client = new Client({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://postgres:password@localhost:5432/plantsdb",
  ssl: process.env.DATABASE_URL ? true : false
});

client.connect();

const getMenuTitles = (request, response) => {
  client.query("SELECT * FROM menuTitles ORDER BY id ASC", (err, results) => {
    if (err) throw err;
    response.status(200).json(results.rows);
  });
};

const getSizeMenuData = (request, response) => {
  client.query(
    "SELECT * FROM plantSizeMenu ORDER BY id ASC",
    (err, results) => {
      if (err) throw err;
      response.status(200).json(results.rows);
    }
  );
};

const getLightLevelMenuData = (request, response) => {
  client.query(
    "SELECT * FROM lightlevelmenu ORDER BY id ASC",
    (err, results) => {
      if (err) throw err;
      response.status(200).json(results.rows);
    }
  );
};

const getEaseOfCareMenuData = (request, response) => {
  client.query(
    "SELECT * FROM easeOfCareMenu ORDER BY id ASC",
    (err, results) => {
      if (err) throw err;
      response.status(200).json(results.rows);
    }
  );
};

const getPetSafeMenuData = (request, response) => {
  client.query("SELECT * FROM petSafeMenu ORDER BY id ASC", (err, results) => {
    if (err) throw err;
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getMenuTitles,
  getSizeMenuData,
  getLightLevelMenuData,
  getEaseOfCareMenuData,
  getPetSafeMenuData
};
