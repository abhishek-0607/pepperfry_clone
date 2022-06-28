const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.get("/login", function (req, res) {
 return res.render("users/login_page") 
  
});

 
router.get("/signup", function (req,res){
  return res.render("users/signUpPage");
});

router.get("/home", function (req, res) {
  return res.render("products/homePage");
});

// router.get("", async function (req, res) {
//   const users = await User.find().lean().exec();
//   const pageTitle = "Welcome to Users page";

//   // return res.send(users);
//   return res.render("users/allUsers", {
//     users: users,
//     pageTitle,
//   });
// });

 {/* <a href="/users/create?first_name=Dheeraj&last_name=Bisht&email=dheeraj@bisht.com">Dheeraj Bisht</a> */}
// router.get("/create", function (req, res) {
//   res.render("users/addUser", {
//     first_name: req.query.first_name,
//     last_name: req.query.last_name,
//     email: req.query.email,
//   });
// });


router.post("", async function (req, res) {
  
  const user = await User.create({
    "first_name": req.body.uname,
    "last_name": req.body.num,
    "email": req.body.mail,
    "password": req.body.psw,
  });
 
  res.render("users/login_page");
  return res.send(user);
});

router.get("", async function (req, res) {
  const user = await User.find().lean().exec();
  return res.send(user);
});

module.exports = router;
