const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/user");

router.post("/userroute",async (req,res)=>{
    try{
        let user = new User();
        user._id = new mongoose.Types.ObjectId();
        user.facts = req.body.facts;


        await user.save();

        res.json({
            success : true,
            savedUser : user,
            message : "user saved ..."
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
});
router.get("/userroute/:id", async (req,res)=>{
    try {
        let user = await User.findById({ _id : req.params.id});

        res.json({
            success : true,
            foundPen : user,
            message : "user found ..."
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
});
router.get("/userroute/", async (req,res)=>{
    try {
        await User.find({}, function(err,result){
            if(err){
                console.log(err)
            }else{
                res.json(result)
            }
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
});
module.exports = router;