const Router = require("express").Router();
const path = require("path");

Router.get("/", (req, res) => {
    res.render(path.join(__dirname, "../views", "Index.ejs"));
});

module.exports = Router;