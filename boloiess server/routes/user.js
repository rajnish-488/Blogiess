const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post")
//upadte
router.put("/:id", async (req, res) => {
   if (req.body.userId === req.params.id) {
      if (req.body.password) {
         const salt = await bcrypt.genSalt(10);
         req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
         //if the object in req.body is in Schema of User then the User will change to new data else no change;
         const UpadateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
         }, { new: true });
         res.status(200).json(UpadateUser);

      } catch (err) {
         res.status(500).json(err);
      }
   }
   else {
      res.status(401).json("Not allowed");
   }
})



//delete
router.delete("/:id", async (req, res) => {
   if (req.body.userId === req.params.id) {
      try {
         const user = await User.findById(req.params.id);
         try {
            await Post.deleteMany({ username: user.username });
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User is been deleted");

         } catch (err) {
            res.status(500).json(err);
         }

      } catch (err) {
         res.status(404).json("user not found");
      }

   }
   else {
      res.status(401).json("you can delete only your account");
   }
})

//user info
router.get("/:id", async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);

   } catch (err) {
      res.status(500).json(err);
   }
})



module.exports = router;