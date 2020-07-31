const Router = require("express").Router();
const path = require("path");
const database = require("../../ConnectionFactory.js");

const Connection = new database();

Router.get("/", async (req, res) => {

    const conn = await Connection.Mongo();

    conn.db("crud").collection("products").find({}).toArray((err, result) => {

        if(err) {
            throw err;
        }

        res.render(path.join(__dirname, "../views", "Index.ejs"), { productList: result });

    });

});

module.exports = Router;