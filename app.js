const exp = require("constants")
const express = require("express")

const app = express()

app.use(express.urlencoded({extended: false}))

app.use("/add-product", (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add Product</button></form>')
})

app.use("/product", (req, res, next) => {
    const body = req.body
    console.log(body);
    res.redirect("/")
})

app.use("/",(req, res, next) => {
    console.log(("In another middleware!"));
    res.send('<h1>Hello From Express</h1>')
})


app.listen(3000, () => console.log("Server start at port 3000!"))
