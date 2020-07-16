const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./queries");

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(__dirname + "/dist/"));

app.use(cors());

app.use(bodyParser.json());

app.get("/api/sizemenudata", db.getSizeMenuData);

app.get("/api/lightlevelmenudata", db.getLightLevelMenuData);

app.get("/api/easeofcaremenudata", db.getEaseOfCareMenuData);

app.get("/api/petsafemenudata", db.getPetSafeMenuData);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
