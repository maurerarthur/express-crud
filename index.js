const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//Routes

const index = require("./src/routes/Index");
const create = require("./src/routes/Create");
const update = require("./src/routes/Update");
const del = require("./src/routes/Delete");

//-----

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/create", create);
app.use("/update", update);
app.use("/delete", del);

app.listen(3000);