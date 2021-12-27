const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')

app.use(express.json())
const jwt = require('jsonwebtoken')
var con = mysql.createConnection({
   host: "remotemysql.com",
   user: "uJjQaBfJbk",
   password: 'fVIWjMLvvE',
   database: 'uJjQaBfJbk'
})

const sercet_key = "qwertyuiop"


app.get('/', (req, res) => {

   res.send('Hello World!')
})

app.post('/login', (req, res) => {
   const query = "SELECT * FROM UserDetail WHERE UserName = '" + String(req.body.UserName) + "';"
   //console.log(query);

   con.query(query, function (err, result) {
      if (err) throw err;
      console.log(String(result[0].Password));

      const resultToken = result[0].JWTtoken
      const Password = result[0].Password
      console.log(Password, req.body.Password);
      if (Password == req.body.Password) {
         console.log(jwt.verify(result[0].JWTtoken, sercet_key));
         if (jwt.verify(result[0].JWTtoken, sercet_key).UserName = req.body.UserName) {
            res.send(JSON.stringify({ status: 'OK', UserName: req.body.UserName, Token: resultToken }))
         }
      } else {
         res.send(JSON.stringify({ status: 'NOT' }))
      }
   });


})


app.post('/register', (req, res) => {
   const token = jwt.sign(req.body, sercet_key)
   const query = "INSERT INTO UserDetail (UserID,UserName,Password,Email,Name,JWTtoken) VALUES(NULL,'" + String(req.body.UserName) + "','" + String(req.body.Password) + "','" + String(req.body.Email) + "','" + String(req.body.Name) + "','" + String(token) + "')"
   //console.log(query);
   con.query(query, function (err, result) {
      if (err) throw err;
      console.log("Data Added to the Table");

   });

   res.send("The Data Added")
})

app.post('/createTable', (req, res) => {

   const sql1 = "CREATE TABLE IF NOT EXISTS UserDetail (UserId INT AUTO_INCREMENT PRIMARY KEY, UserName VARCHAR(255) UNIQUE, Password VARCHAR(255), Email VARCHAR(255) UNIQUE, Name VARCHAR(255),JWTtoken VARCHAR(255))";
   con.query(sql1, function (err, result) {
      if (err) throw err;
      console.log(" user Table created");

   });
   const sql2 = 'CREATE TABLE IF NOT EXISTS LoginDetail (UserId INT, UserName VARCHAR(255) UNIQUE, Password VARCHAR(255), Name VARCHAR(255),JWTtoken VARCHAR(255))';
   con.query(sql2, function (err, result) {
      if (err) throw err;
      console.log(" user Table created");

   });
   res.send('The table created check the CMD')
})




app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})