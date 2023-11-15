exports.getLogin = (req, res, next) => {
    // console.log(req.get('Cookie').split('=')[1]);
    const isLoggedIn = req.get('Cookie').trim().split('=')[1];
    console.log(req.session.isLoggedIn);
    res.render("auth/login", {
        pageTitle: "Login",
        isAuthenticated: isLoggedIn,
        path: "/login"
    })
}

exports.postLogin = (req, res, next) => {
    req.session.isLoggedIn = true
    res.redirect("/")
}