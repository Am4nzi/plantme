const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const db = require("./queries");

const app = express();

app.use(cors())

app.use(bodyParser.json());

app.get("/plantsdata", db.getData);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
