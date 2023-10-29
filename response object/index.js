const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/test", (req, res) => {
  console.log("this is test");
  res.end();
});
app.get("/about", (req, res) => {
  // console.log(res.headersSent);
  // res.render("pages/about", { title: "About" });
  // console.log(res.headersSent);
  res.status(200);
  res.cookie("token", "masud rana");
  // res.location("/about"); just set location into header
  // res.location("/test");
  //res.location("/test"); redirect to this /test route
  // res.redirect("/test");
  res.set("Title", "About");
  res.get("Title");
  res.end();
  // res.json({
  //   name: "masud Rana",
  // });
});

app.listen(5000, () => console.log("listening on port 5000"));
