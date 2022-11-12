const { Double } = require('mongodb');
const mongoose =require('mongoose')

// Schema below..
const detail = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    rank:{
        type:Number,
        required : true
    }
})
// when we create detail schema , it will be created in DB(cloud.mongodb)

// Table below
const Detail = mongoose.model('Detail', detail);

module.exports = Detail