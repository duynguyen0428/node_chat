var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var WeddingGuest = new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String
    },
    relationship:{
        type:String,
        required:true
    },
    side :{
        type:String,
        required:true
    },
    numberOfAttendants:{
        type:Number,
        required:true
    }
});

var Guests = mongoose.model('Guests',WeddingGuest);

module.exports = {
    Guests : Guests 
}