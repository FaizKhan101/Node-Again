const express = require("express");

const app = express();

const errorController = require("./controllers/error");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000, () => console.log("Server start at port 3000!"));
