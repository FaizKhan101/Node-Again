const express = require("express");

const app = express();

const db = require("./util/database");
const errorController = require("./controllers/error");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const User = require("./models/user")

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  User.findById("6549249419f35e508a8185b1")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

db.mongoConnect()
  .then((result) => {
    app.listen(3000, () => console.log("Server start at port 3000!"));
  })
  .catch((err) => console.log(err));
