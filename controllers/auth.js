exports.getLogin = (req, res, next) => {
    res.render("auth/login", {
        pageTitle: "Login",
        isAuthenticated: req.isLoggedIn,
        path: "/login"
    })
}

exports.postLogin = (req, res, next) => {
    console.log("isLoogedIn");
    req.isLoggedIn = true
    res.redirect("/")
}