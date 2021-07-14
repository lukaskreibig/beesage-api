const bcrypt = require("bcrypt");
const Users = require("../models/user-models");

const enter = (req, res) => {
    Users.login(req.body.username, (err, results) => {
       console.log(req.body.username)
        if (err) {
            res.status(500).send('Server Error, we could find that user :(')
          } else {
           
           bcrypt.compare(req.body.password, results[0].password)
            .then(isThereAMatch => {
              if(isThereAMatch){
                res.cookie('login', true, {httpOnly: true, expires: new Date(Date.now()+ 30000), }).json({
                  username: results[0].username,
                  message:'You have successfully logged in!'
                })
              }else{
                res.json({message: 'Wrong password'})
              }
            }) 
        }
    })
};

module.exports = { enter };

