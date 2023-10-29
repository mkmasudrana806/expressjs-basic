const express = require("express");
const app = express();
const admin = express.Router();

const myMiddleware = (req, res, next) => {
  console.log("i am logged in 1");
  next();
};

const myMiddleware2 = (req, res, next) => {
  console.log("i am logged in 2");
  next();
};
// middleware
// app.use(myMiddleware); // application level middleware
// app.use(myMiddleware2);

app.use("/admin", admin); //router level middleware

admin.get("/dashboard", (req, res, next) => {
  console.log("this is called only when /admin/dashboard is called");
  // throw a error to the error handling middleware
  throw new Error("this is custom error masud rana passed");
  // you must catch this error by error handling middleware
  // otherwise your program will crash  and you won't be able to continue.
});

app.get("/about", (req, res) => {
  res.send("about");
});

const errorHandler = (err, req, res, next) => {
  console.log("without error this middleware is called");
};

app.use(errorHandler);

app.listen(5000, () => console.log("listening on port 5000"));
