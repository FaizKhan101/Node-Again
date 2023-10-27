const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", { pageTitle: "Shop", prods: products, path: "/" });
  });
};
