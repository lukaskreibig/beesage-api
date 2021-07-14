const authentication = (req, res, next) => {
  if (req.cookies.login === "true") {
    console.log("User is logged in");
    next();
  } else {
    res.status(403).send("Unauthorized");
  }
};

module.exports = { authentication };
