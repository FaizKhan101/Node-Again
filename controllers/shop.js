const adminControlller = require("./admin")

exports.getProducts = (req, res, next) => {
    console.log("shop.js", adminControlller.products);
    res.render("shop", { pageTitle: "Shop", prods: adminControlller.products, path: "/" })
}