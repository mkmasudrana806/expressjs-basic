const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const admin = express();

app.use(express.json());
app.use(cookieParser());

app.use("/admin", admin);
admin.get("/dashboard/:id", (req, res) => {
  console.log(
    "this is the sub app and mounted app.here we can see the baseUrl property"
  );
  console.log(req.baseUrl);
  console.log(req.originalUrl);
  console.log(req.path);
  console.log(req.url);
  console.log(req.ip);
  console.log(req.hostname);
  console.log(req.method);
  console.log(req.protocol);
  console.log(req.params.id);
  console.log(req.query);
  console.log(req.body);
  //before using cookies. install cookie-parser then app.use(cookieParser()); as middleware. otherwise we will get undefined in server side
  console.log(req.cookies);
});

app.get("/", (req, res) => {
  console.log(req.baseUrl);
  console.log(req.originalUrl);
  console.log(req.path);
  res.send("Hello world!");
});

app.listen(5000, () => {
  console.log("listening on port ", 5000);
});
