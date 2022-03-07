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
router.put("/:id", async (req, res) => {
   try {
      const post = await Post.findById(req.params.id);
      //console.log(post);
      if (post.username === req.body.username) {
         try {
            const upadtePost = await Post.findByIdAndUpdate(req.params.id, {
               $set: req.body
            },
               { new: true }
            );
            res.status(200).json(upadtePost);
         } catch (err) {
            res.status(500).json(err);
         }

      } else {
         res.status(101).json("uou can only upadate you post");
      }


   } catch (err) {
      res.status(500).json(err);
   }
});


//Delete post
router.delete("/:id", async (req, res) => {
   try {
      const post = await Post.findById(req.params.id);
      //console.log(post);
      if (post.username === req.body.username) {
         try {
            const DeletePost = await Post.findByIdAndDelete(req.params.id);
            res.status(200).json("post is been deleted");
         } catch (err) {
            res.status(500).json(err);
         }

      } else {
         res.status(101).json("uou can only delete you post");
      }


   } catch (err) {
      res.status(500).json(err);
   }
});

//get post
router.get("/:id", async (req, res) => {
   try {
      const user = await Post.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);

   } catch (err) {
      res.status(500).json(err);
   }
})


//get  all post
router.get("/", async (req, res) => {
   const username = req.query.user;
   const catagory = req.query.cat;
   //console.log("getting the post request from client");
   try {
      let posts;
      if (username) {
         posts = await Post.find({ username: username })
      } else if (catagory) {

         posts = await Post.find({
            catagories: {
               $in: [catagory]
            }
         })
      } else {
         posts = await Post.find();
      }
      res.status(200).json(posts);
   } catch (err) {
      res.status(500).json(err);
   }
})



module.exports = router;