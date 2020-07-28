const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("CRUD");
});

app.listen(3000);