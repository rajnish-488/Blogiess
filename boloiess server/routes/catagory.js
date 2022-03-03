const router = require("express").Router();
const Catagory = require("../models/Catagory");


router.post("/", async (req, res) => {
   const newCat = await Catagory(req.body);
   try {
      const saveCat = await newCat.save();
      res.status(200).json(saveCat);
   } catch (err) {
      res.status(500).json(err);
   }
})


router.get("/", async (req, res) => {
   try {
      const getCat = await Catagory.find();
      res.status(200).json(getCat);
   } catch (err) {
      res.status(500).json(err);
   }
})

module.exports = router;