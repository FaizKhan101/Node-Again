const path = require("path")

const express = require("express")

const app = express()

const rootDir = require("./util/path")
const adminData = require("./routes/admin")
const shopRoutes = require("./routes/shop")

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))

app.use("/admin", adminData.router)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).render("404", { pageTitle: "Page Not Found!", path: "/error" })
})

app.listen(3000, () => console.log("Server start at port 3000!"))
