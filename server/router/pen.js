const router = require("express").Router();
const mongoose = require("mongoose");
const Pen = require("../models/pen");

router.post("/penroute", async (req, res) => {
    try {
        console.log(req.body)
        if (req.body.allData) {
            Pen.insertMany(req.body.allData, (err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.json({
                        success: true,
                        multiplePen: req.body.allData,
                        message: "multiple Pen saved...."
                    })
                }
            })
        } else {
            let pen = new Pen();
            pen._id = new mongoose.Types.ObjectId();
            pen.question = req.body.question;
            pen.answers = req.body.answers;
            pen.correctAnswers=  req.body.correctAnswers,
            pen.subject= req.body.subject
            await pen.save((error) => {
                if (error) {
                    Pen.find({})
                        .populate('userBy')//iki şema birbirne bağlandı
                        .exec((error, users) => {
                            console.log(JSON.stringify(users, null, '\t'));
                        })
                }
            });

            res.json({
                success: true,
                savedPen: pen,
                message: "pen saved...."
            })
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

router.get("/penroute/:id", async (req,res)=>{
    try {
        let pen = await Pen.findById({ _id : req.params.id});

        res.json({
            success : true,
            foundPen : pen,
            message : "pen found ..."
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
});

router.get("/pensroute/", async (req,res)=>{
    try {
        await Pen.find({}, function(err,result){
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


router.delete("/penroute/:id", async (req,res)=>{ //findByIdAndRemove
    try {
        let pen = await Pen.findByIdAndDelete({ _id : req.params.id});

        res.json({
            success : true,
            deletedPen : pen,
            message : "pen deleted ..."
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
})

router.put("/penroute/:id",async (req,res)=>{
    try{
        let pen = await Pen.findByIdAndUpdate({ _id : req.params.id},{
            $set:{
                modelName : req.body.modelName,
                modelYear : req.body.modelYear        
            }
        });      //,{upsert:true}
        res.json({
            success : true,
            updatedPen : pen,
            message : "pen updated ...",
        });
    }catch(error){
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
});

module.exports = router;