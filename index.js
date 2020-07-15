const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./queries");

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

app.use(express.static(__dirname + "/dist/"));

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.use(bodyParser.json());

app.get("/api/sizemenudata", db.getSizeMenuData);

app.get("/api/lightlevelmenudata", db.getLightLevelMenuData);

app.get("/api/easeofcaremenudata", db.getEaseOfCareMenuData);

app.get("/api/petsafemenudata", db.getPetSafeMenuData);

// app.get("/menuTitles", db.getMenuTitles);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
