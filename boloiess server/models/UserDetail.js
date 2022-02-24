// import all the required the dependences;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// defining the schema;
const UserDetail = new Schema({
   UserName: {
      type: String,
      required: true,
      unique: true,

   },
   Password: {
      type: String,
      required: true
   },
   Email: {
      type: String,
      required: true,
      unique: true
   },
   Name: {
      type: String,
      required: true
   },
   JWTtoken: {
      type: String,
      required: true
   }
}, { timestamps: true });

//export the schema
const User = mongoose.model('UserDetail', UserDetail);
module.exports = User

