

const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");



router.get("/home", function (req, res) {
  return res.render("products/homePage");
});


router.get("",async function (req, res) {
    const product = await Product.find().lean().exec();  
   return res.send(product)
          
 });
    


router.get("/productpage",async function (req, res) {
     
   return res.render("products/allSofasPage")
        
 });
    

router.get("/productinfo", function (req, res) {
  
  res.render("products/productInfo",{
    
    name: req.query.name,
    price: req.query.price,
    img: req.query.img,
    brand: req.query.brand,
    cutPrice: req.query.cutPrice,
    discount:req.query.discount,
    percentOff: req.query.percentOff,
    
  });

   
});
router.get("/cart", function (req, res) {
    return res.render("products/cartPage");
});
router.get("/payment", function (req, res) {
    return res.render("products/paymentpage"); 
});
router.get("/success", function (req, res) {
    return res.render("products/successPage"); 
});
router.get("/aboutus", function (req, res) {
    return res.render("products/footerAboutPage"); 
});




router.post("", async function (req, res) {
 
  const product = await Product.create(req.body);

  return res.send(product);
});


router.patch("/:id",async function (req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean();  
   return res.send(product)
          
 });
    
  


module.exports = router;
