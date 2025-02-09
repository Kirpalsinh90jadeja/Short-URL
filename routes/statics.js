const express = require("express");
const URL = require("../models/user")

const router = express.Router();

// router.get("/ur",async (req,res)=>{
//     if(!req.user) return res.redirect("/");
//     const allURLs = await URL.find({createdBy: req.user._id})
//     return res.render("home",{
//         urls:allURLs,
//     })
// })

router.get('/signup',(req,res)=>{
    return res.render('signup',{error:""});
})
router.get('/',(req,res)=>{
    return res.render('login',{error:""});
})
module.exports = router;
