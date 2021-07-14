const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  if (!req.cookies.token) {
    res.send("Something went wrong")   
  } else {
    jwt.verify(req.cookies.token, "your-secret-key", (err, decoded) => {
      if(err) {
        res.send("Wrong Access")
      }
      req.beekeeper_id = decoded.id
      console.log(decoded)
      next();
    })
  }  
};

module.exports = { authentication };
