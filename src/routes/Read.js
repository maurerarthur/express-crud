const Router = require("express").Router();

Router.get("/", (req, res) => {
    res.send("Read");
});

module.exports = Router;