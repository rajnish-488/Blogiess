const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post")


//Create New Post
router.post("/", async (req, res) => {
   const newPost = new Post(req.body);
   try {
      const savePost = await newPost.save();
      res.status(200).json(savePost);

   } catch (err) {
      res.status(500).json(err);
   }
});



//Update Post
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

//Delete post


//get post
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