const bcrypt = require("bcrypt");
const Users = require("../models/user-models");
const jwt = require("jsonwebtoken");

const userSignin = (req, res) => {
    Users.login(req.body.username, (err, results) => {       
        if (err) {
            res.status(500).send('Server Error, we could not find that user.')
          } else {           
           bcrypt.compare(req.body.password, results[0].password)
            .then(isThereAMatch => {
              if(isThereAMatch){
                const token = jwt.sign({ id: results[0].beekeeper_id }, "your-secret-key")                
                res.status(200).cookie('token', token, { httpOnly: true })
                .json({       
                  id : results[0].beekeeper_id,            
                  username: results[0].username,
                  message:'You have successfully logged in!'
                })
                // console.log(results[0].beekeeper_id)
              }else{
                res.json({message: 'Username and password do not match.'})
              }
            }) 
        }
    })
}; 

module.exports = { userSignin };

