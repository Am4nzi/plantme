const express = require("express");
const serveStatic = require("serve-static");
const bodyParser = require("body-parser");
const cors = require('cors')
const db = require("./queries");

const app = express();
app.use(serveStatic(__dirname + "/dist"));

app.use(cors())

app.use(bodyParser.json());

app.get("/sizemenudata", db.getSizeMenuData);

app.get("/lightlevelmenudata", db.getLightLevelMenuData);

app.get("/easeofcaremenudata", db.getEaseOfCareMenuData);

app.get("/petsafemenudata", db.getPetSafeMenuData);

app.get("/menuTitles", db.getMenuTitles);

app.use(express.static('dist'))

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
