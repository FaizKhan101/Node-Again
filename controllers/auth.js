exports.getLogin = (req, res, next) => {
  // console.log(req.get('Cookie').split('=')[1]);
  console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    pageTitle: "Login",
    isAuthenticated: req.session.isLoggedIn,
    path: "/login",
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
