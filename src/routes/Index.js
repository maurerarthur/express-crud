const Router = require("express").Router();

Router.get("/", (req, res) => {
    res.send("This is the index");
});

module.exports = Router;