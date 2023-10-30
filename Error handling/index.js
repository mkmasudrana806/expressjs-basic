const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  console.log("this");
  res.send(a);
  //   throw new Error("Not implemented");
});

//this is application level middleware to handle 404 not found errors
//this middleware called when none of the route is matching
app.use((req, res) => {
  console.log("this is not found error handler");
});
// eror handling middleware overrides when any error occurs
app.use((err, req, res, next) => {
  res.send("this middleware called since error is occuring");
  console.log("console. print", err);
});
app.listen(port, () => {
  console.log("listening on port " + port);
});
