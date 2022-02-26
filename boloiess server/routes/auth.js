const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//register
router.post("/register", async (req, res) => {
   try {
      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
         username: req.body.username,
         email: req.body.email,
         password: hashPass,

      });
      const user = await newUser.save();
      res.status(200).json(user)

   } catch (err) {
      res.status(500).json(err);
   }
})



//login



module.exports = router;