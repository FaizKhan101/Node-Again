const express = require("express");
const mongoose = require("mongoose")

const app = express();

const errorController = require("./controllers/error");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
// const User = require("./models/user")

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   User.findById("654bbbabce973fc0b0f66e23")
//     .then((user) => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect("mongodb://localhost:27017/shop").then(result => {
  app.listen(3000, () => console.log("Server start at port 3000!"));
})
