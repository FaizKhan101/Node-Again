const path = require("path")

const express = require("express")

const app = express()

const rootDir = require("./util/path")
const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))

app.use("/admin", adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"))
})

app.listen(3000, () => console.log("Server start at port 3000!"))
