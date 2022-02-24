// importing all the reqired dependences;
const express = require('express');
const router = express.Router();
const UserDetail = require('../models/UserDetail')
const jwt = require('jsonwebtoken');

// creation of an Secrat key to call the jwt auth security;
const secret_key = "Rajnish@123";

//call the route function to when reach this route;
/* input body:{
   username:
   password:
   email:
   name:
}
return also have details like:-
"_id": "61deb444478ff1a642624869",
"createdAt": "2022-01-12T10:58:12.118Z",
"updatedAt": "2022-01-12T10:58:12.118Z",
"__v": 0
*/
router.post('/register', async (req, res) => {
   // creating the token:-
   const token_of_register = jwt.sign({
      "UserName": req.body.username,
      "Password": req.body.Password,
      "Email": req.body.email,
      "Name": req.body.name,
   }, secret_key);
   console.log(token_of_register);
   // deploying the schema;
   const detail = new UserDetail({
      UserName: req.body.username,
      Password: req.body.password,
      Email: req.body.email,
      Name: req.body.name,
      JWTtoken: token_of_register
   });

   try {
      const a1 = await detail.save();
      res.json({
         "status": true,
         "data": a1
      })

   } catch (err) {
      //false will come only with the username or email are duplicate
      res.json({
         "status": false,
         "error": err
      })
   }

});

/*
input body:{
   username:
   password:
}
*/
// get function for login
router.post("/login", async (req, res) => {
   try {
      const loginit = await UserDetail.findOne({ UserName: req.body.username }, function (err, result) {
         if (err) throw err;
         console.log(result);
      });
      //let st, tok;
      console.log(loginit);
      if (loginit && loginit.Password === password) {
         const login_token = jwt.sign(loginit, secret_key);
         return res.json({
            "status": true,
            "token": login_token
         })
      } else {
         res.json({
            "status": false,
            "error": "UserName and password dont match"
         })
      }

   } catch (err) {
      res.json({
         "status": false,
         "error": err
      })
   }
});




// exporting the route;
module.exports = router