const Router = require("express").Router();

Router.get("/", (req, res) => {
    res.send("Update");
});

module.exports = Router;