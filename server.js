//Express is for building the Rest apis
const express = require("express");
//cors provides Express middleware to enable CORS with various options
const cors = require("cors");
//doplneno po pridani FE
const bodyParser = require("body-parser");

//cesta k FE ve slozce
const path = __dirname + '/app/views/';

const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());
//+FE
//app.use(bodyParser.json); //toto nefunguje

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(express.urlencoded({ extended: true }));
//+FE
app.use(bodyParser.urlencoded({ extended: true }));

//init sequelize
const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


/* drop existing tables using "force: true" 
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
*/

// simple route
/*app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});*/
//+FE
app.get("/", (req, res) => {
  res.sendFile(path + "index.html");
});

//+FE
require("./app/routes/pnastat.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0',() => {
  console.log(`Server is running on port ${PORT}.`);
});
