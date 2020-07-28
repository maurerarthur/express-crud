const Router = require("express").Router();

Router.get("/", (req, res) => {
    res.send("Create");
});

module.exports = Router;