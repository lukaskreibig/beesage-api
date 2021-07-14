const authentication = (req, res, next) => {
  if (req.cookies.login === "true") {
    console.log("user is logged in");
    next();
  } else {
    res.status(403).send("unauthorized");
  }
};

module.exports = { authentication };
