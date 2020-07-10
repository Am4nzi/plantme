const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: "localhost",
  database: "plantsdb",
  password: process.env.DB_PASSWORD,
  port: 5432
});

const getPlantsData = (request, response) => {
  pool.query("SELECT * FROM plants ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getMenuTitles = (request, response) => {
  pool.query("SELECT * FROM menuTitles ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getSizeMenuData = (request, response) => {
  pool.query(
    "SELECT * FROM plantSizeMenu ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getLightLevelMenuData = (request, response) => {
  pool.query(
    "SELECT * FROM lightlevelmenu ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getEaseOfCareMenuData = (request, response) => {
  pool.query("SELECT * FROM easeofcare ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getPetSafeMenuData = (request, response) => {
  pool.query("SELECT * FROM petsafe ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getMenuTitles,
  getPlantsData,
  getSizeMenuData,
  getLightLevelMenuData,
  getEaseOfCareMenuData,
  getPetSafeMenuData
};
