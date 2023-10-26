const path = require("path")

const express = require("express")

const app = express()

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

app.use(express.urlencoded({extended: false}))

app.use("/admin", adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(3000, () => console.log("Server start at port 3000!"))
