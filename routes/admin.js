const express = require("express");

const adminControlller = require("../controllers/admin")

const router = express.Router();

router.get("/add-product", adminControlller.getAddProduct);

router.post("/add-product", adminControlller.postAddProduct);

router.get('/products', adminControlller.getProducts)

module.exports = router