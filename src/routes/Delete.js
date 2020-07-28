const Router = require("express").Router();

Router.get("/", (req, res) => {
    res.send("Delete");
});

module.exports = Router;