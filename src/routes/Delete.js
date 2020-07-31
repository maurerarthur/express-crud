const Router = require("express").Router();
const Mongo = require("mongodb");
const database = require("../../ConnectionFactory.js");

const Connection = new database();

Router.post("/", async (req, res) => {

    const conn = await Connection.Mongo();

    conn.db("crud").collection("products").deleteOne({ _id: new Mongo.ObjectID(req.body.deletedProduct) }).then(() => {
        res.redirect("/");
    });

});

module.exports = Router;