const port = 3334;

const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("tiny"));

app.set("view engine", "ejs");

app.use(express.static("./public"));

const db = require("./Models/db");

//const indexRoute = require('./routes/index');
app.use('/', require("./routes/index"));

app.use('/shows', require('./routes/shows'));

app.listen(port, () => {
  console.log(`YO JOE!  Coming in HOT on http://localhost:${port}`);
});
