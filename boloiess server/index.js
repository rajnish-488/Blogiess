//calling all the required dependencies;
const express = require('express');
const port = 3300;
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const multer = require("multer");


dotenv.config();
const app = express();
// to used the json data;
app.use(express.json());
// calling mongodb and connection to it.
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
const con = mongoose.connection;
con.on('open', () => {
   console.log("...connected to database");
})
// the 1st route which is sending the data hello word;
app.get('/', function (req, res) {
   res.send("Hello world!");
});


// code fot storring tge images into files
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "images")
   },
   filename: (req, file, cb) => {
      cb(null, req.body.name)
   },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
   res.status(200).json("file uplaoded")
})

// calling of the all the routes in ./routs directory and perform action;
const SignUp = require('./routes/signUp')
app.use('/fuck', SignUp);


const authRoute = require("./routes/auth");
app.use("/api/auth", authRoute);

const userRoute = require("./routes/user");
app.use("/api/user", userRoute);

const postRoute = require("./routes/post");
app.use("/api/post", postRoute);

const catagoryRoute = require("./routes/catagory");
app.use("/api/catagory", catagoryRoute);



















// calling of the app;
app.listen(port, () => {
   console.log("....connected at port number 3300")
})



