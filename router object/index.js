const express = require("express");
const app = express();

const adminRoute = require("./adminRoute");
app.get("/about", (req, res) => {
  console.log("about");
});

app
  .route("/user")
  .get((req, res) => {
    console.log("get");
  })
  .post((req, res) => {
    console.log("post");
  });
app.use("/admin", adminRoute); // by pass the api route to the admin route

app.listen(5000, () => console.log("listening onport 5000"));
