const router = require("express").Router();
const Category = require("../models/Category");


//CREATE NEW CATEGORY
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try{
     const savedCat = await newCat.save();
     res.status(200).json(savedCat);
  } catch (err) {
    return res.status(500).json(err);
  }
});


// GET CATEGORY
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();
    return res.status(200).json(cats);
  } catch (err) {
    return res.status(500).json(err);
  }
});


module.exports = router;