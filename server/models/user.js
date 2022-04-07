const mongoose = require("mongoose");

const user = new mongoose.Schema({
    _id : mongoose.ObjectId,
    facts :String,
});

module.exports = mongoose.model("user",user);