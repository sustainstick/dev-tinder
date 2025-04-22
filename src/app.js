const express = require("express");

const app = express();

app.use("/home", (req, res) => {
    res.send("Hello this is home page");
});


app.use("/lists", (req, res) => {
   res.send("Hello this is lists page");
});

app.use("/update", (req, res) => {
    res.send("Hello this is update page");
});



app.listen(3000, () => {
    console.log("server is Live");
});