const Router = require("express").Router();
const path = require("path");
const Mongo = require("mongodb");
const database = require("../../ConnectionFactory.js");

const Connection = new database();

Router.get("/", async (req, res) => {

    const conn = await Connection.Mongo();

    conn.db("crud").collection("products").findOne(new Mongo.ObjectID(req.query.id), (err, result) => {

        if(err) {
            throw err;
        }

        res.render(path.join(__dirname, "../views", "Update.ejs"), { product: result });

    });

});

Router.post("/", async (req, res) => {

    const conn = await Connection.Mongo();

    conn.db("crud").collection("products").updateOne({ _id: new Mongo.ObjectID(req.body.id) }, {
        $set: {
            product: req.body.product,
            description: req.body.description,
            quantity: req.body.quantity
        }
    }).then(() => {
        res.redirect("/");
    });

});

module.exports = Router;