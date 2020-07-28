const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//Routes

const index = require("./src/routes/Index");
const create = require("./src/routes/Create");
const read = require("./src/routes/Read");
const update = require("./src/routes/Update");
const del = require("./src/routes/Delete");

//-----

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", index);

app.use("/create", create);
app.use("/read", read);
app.use("/update", update);
app.use("/delete", del);

app.listen(3000);