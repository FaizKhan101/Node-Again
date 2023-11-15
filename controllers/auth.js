exports.getLogin = (req, res, next) => {
    console.log(req.get('Cookie').split('=')[1]);
    const isLoggedIn = req.get('Cookie').trim().split('=')[1];
    res.render("auth/login", {
        pageTitle: "Login",
        isAuthenticated: isLoggedIn.toString(),
        path: "/login"
    })
}

exports.postLogin = (req, res, next) => {
    res.setHeader('Set-Cookie', 'loggedIn=true')
    res.redirect("/")
}