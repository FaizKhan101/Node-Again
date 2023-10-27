const express = require("express")

const router = express.Router()

const adminData = require("./admin")

router.get("/",(req, res, next) => {
    console.log("shop.js", adminData.products);
    res.render("shop", { pageTitle: "Shop", prods: adminData.products, path: "/" })
})

module.exports = router