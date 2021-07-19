const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  console.log(req.cookies.token)
  if (!req.cookies.token) {
    
    res.send(`Something went wrong.${req.cookies.token}`)   
  } else {
    jwt.verify(req.cookies.token, process.env.SECRET_KEY, (err, decoded) => {
      if(err) {
        res.send("Wrong Access.")
      }
      req.beekeeper_id = decoded.id     
      next();
    })
  }  
};

module.exports = { authentication };
