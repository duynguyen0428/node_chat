var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Users = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minlength:6,
        required:true
    }
});

var Users = mongoose.model('Users',Users);

module.exports ={
    Users : Users
};