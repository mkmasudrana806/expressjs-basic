const express = require("express");
const adminRoute = express.Router();

adminRoute.get("/dashboard", (req, res) => {
  console.log("this is dashboard");
});

module.exports = adminRoute;
