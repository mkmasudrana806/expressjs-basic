const express = require("express");
const app = express();

// app.use(express.json());
// app.use(express.text());
// app.use(express.raw());
// app.use(express.urlencoded());

// enable use to create public static folder
app.use(express.static(`${__dirname}/public/`));

// enable use to create multiple router object and use it
const userRouter = express.Router();
userRouter.get("/", function (req, res) {
  console.log("this is using the router object");
});

app.get("/", (req, res) => {
  res.send("this is base route");
  console.log(req.body);
});

app.post("/", (req, res) => {
  res.send("this is post route ");
});

app.listen(5000, () => {
  console.log("server listening on port: ", 5000);
});
