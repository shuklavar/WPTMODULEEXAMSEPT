const express = require("express");
const { adduser } = require("./db");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.post("/newuser", async (req, res) => {
    const reqdata = req.body;
    await adduser(reqdata);
    //res.send("Record added successfully");
    res.json({ "message": "Record Added Successfully" })
})
