const express = require("express");

const app = express();


app.get("/user", (req, res) => {
    res.send({firstname: "Sasidhar", lastname: "reddy"});
});

app.post("/user", (req, res) => {
    res.send("Data succefully sent to database.");
});

app.delete("/user", (req, res) => {
    res.send("deleted succefully");
});

app.put("/user" , (req, res) => {
    res.send("updated succefully");
});

app.use("/home", (req, res) => {
    res.send("Hello this is home page");
});




//app.use("/", (req, res) => {
  //  res.send("Hello this is home page");
//});


app.listen(3000, () => {
    console.log("server is Live");
});