const mongoose = require("mongoose");

const pen=new mongoose.Schema({
    _id : mongoose.ObjectId,
    question : String,
    answers : {
        a:String,
        b:String,
        c:String,
    },
    correctAnswers: String,
    subject:String
});

module.exports = mongoose.model("pen",pen);