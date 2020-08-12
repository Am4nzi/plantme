const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./queries");

app.use(express.static(__dirname + "/dist/"));

app.use(cors());

app.use(bodyParser.json());

app.get("/api/menutitles", db.getMenuTitles);

app.get("/api/guidetitles", db.getGuideTitles);

app.get("/api/sizemenudata", db.getSizeMenuData);

app.get("/api/lightlevelmenudata", db.getLightLevelMenuData);

app.get("/api/easeofcaremenudata", db.getEaseOfCareMenuData);

app.get("/api/petsafemenudata", db.getPetSafeMenuData);

app.get("/api/steppertext", db.getStepperText);

app.get("/api/plantsdata", db.getPlantsData);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});