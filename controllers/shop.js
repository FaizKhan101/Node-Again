const Product = require("../models/product")

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll()
    res.render("shop", { pageTitle: "Shop", prods: products, path: "/" })
}