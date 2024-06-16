const express = require("express");
const router = express.Router();

var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth() +1;
var year = currentDate.getFullYear();

router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

    res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

    res.send("This is only my world! In " + date + '.' + month + '.' + year);
});

module.exports = router;