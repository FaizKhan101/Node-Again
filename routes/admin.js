const express = require("express");

const adminControlller = require("../controllers/admin")
const isAuth = require("../middleware/is-auth")

const router = express.Router();

router.get("/add-product", isAuth, adminControlller.getAddProduct);

router.post("/add-product", isAuth, adminControlller.postAddProduct);

router.get('/products', isAuth, adminControlller.getProducts)

router.get("/edit-product/:productId", isAuth, adminControlller.getEditProduct)

router.post("/edit-product", isAuth, adminControlller.postEditProduct)

router.post("/delete-product", isAuth, adminControlller.postDeleteProduct)

module.exports = router