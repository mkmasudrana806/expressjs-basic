const express = require("express");
const ejs = require("ejs");
const app = express();

// app.use(express.json());
// app.use(express.text());
// app.use(express.raw());
// app.use(express.urlencoded());

//
// const admin = express();
// app.use("/admin", admin);
// admin.get("/verify", (req, res) => {
//   console.log(
//     "when /admin is called then the program will come to the admin object and search the sub path"
//   );
//   console.log(admin.mountpath);
// });

// enable use to create public static folder
// app.use(express.static(`${__dirname}/public/`));

// app.locals.title = "Welcome to Express";

// enable use to create multiple router object and use it
// const userRouter = express.Router();
// userRouter.get("/", function (req, res) {
//   console.log("this is using the router object");

// });
// app.enable("case sensitive routing");

app.all("/masud", (req, res) => {
  console.log("this is masud rana inside univesal route path");
});

// app.param("id", (req, res, next, id) => {
//   //when a id param is provided to a route. this app.param function will be called. users/234234
//   //after that we can do something like we can modify the req object. after working this function. now we can shift to the main route req

//   const user = {
//     name: "masud rana",
//     age: "23",
//   };
//   req.user = user;
//   next(); // must call next() to go to the main route req.
//   // now we access this user to the main route
// });
// app.get("/:id", (req, res) => {
//   console.log("user comming from ", req.user.name);
//   // res.send("this is base route");
//   // console.log(app.locals.title);
//   // console.log(req.body);
//   res.send(req.user);
// });

app.post("/", (req, res) => {
  res.send("this is post route ");
});

const admin = express();
const blog = express();

app.use("/blog", blog);
blog.use("/admin", admin);

app.route("/user").get((req, res) => {
  console.log("this is get route");
});

app.set("view engine", "ejs");
app
  .route("/user")
  .get((req, res) => {
    res.render("ejs.index");
  })
  .post((req, res) => {
    console.log("this is post route");
  })
  .put((req, res) => {
    console.log("this is put route");
  });

admin.get("/", (req, res) => {
  // here we can check the entire route path using admin.path()
  console.log(admin.path());
  res.send("this is route like blog/admin home route");
});

app.listen(5000, () => {
  console.log("server listening on port: ", 5000);
});
