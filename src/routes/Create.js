const Router = require("express").Router();
const database = require("../../ConnectionFactory.js");

let Connection = new database();

Router.get("/", async (req, res) => {

    const conn = await Connection.Mongo();
    console.log(conn.db("crud").collection("things"));

    res.send("Create");

});

module.exports = Router;