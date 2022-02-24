//calling all the required dependencies;
const express = require('express')
const port = 3300
const mongoose = require('mongoose')

// the url to the mongodb data base on atlas
const url = "mongodb+srv://rajnish-488:Rajnish123@blogdb.olrql.mongodb.net/BlogDB?retryWrites=true&w=majority";
const app = express()

// calling mongodb and connection to it.
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', () => {
   console.log("...connected to database");
})

// to used the json data;
app.use(express.json())

// the 1st route which is sending the data hello word;
app.get('/', function (req, res) {
   res.send("Hello world!");
});

// calling of the all the routes in ./routs directory and perform action;
const SignUp = require('./routes/signUp')
app.use('/auth', SignUp);

// calling of the app;
app.listen(port, () => {
   console.log("....connected at port number 3300")
})



