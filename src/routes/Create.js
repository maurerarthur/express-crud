const Router = require("express").Router();
const database = require("../../ConnectionFactory.js");

const Connection = new database();

Router.post("/", async (req, res) => {

    const productDetails = {
        product: req.body.product,
        description: req.body.description,
        quantity: req.body.quantity
    };

    const conn = await Connection.Mongo();

    conn.db("crud").collection("products").insertOne(productDetails).then(() => {
        res.redirect("/");
    });

});

module.exports = Router;