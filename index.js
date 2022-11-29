const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const cors = require("cors");
var port = process.env.PORT;

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
    res.send("Welcome to spreadsheet reader API...")
})

app.get("/csv-info", (req, res) => {
    fs.readFile('Shield_Whitelist.csv', 'utf-8', (err, data) => {
        if (err) throw err;
        const arr = data.split(/\r?\n/);
        // console.log("arrrrr", arr)
        res.status(200).json({
            data: {
                data: arr
            }
        })
    })
})

app.listen(port, () => {
    console.log(`spreadsheet-reader sever running on port ${port}`);
})