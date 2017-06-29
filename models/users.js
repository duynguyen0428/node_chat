var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    SALT_WORK_FACTOR = 10;

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

Users.pre('save',function(next){
    var user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
        if(err) return next(err);

        bcrypt.hash(user.password,salt,null,function(err,hash){
            if(err) return next(err);

            user.password = hash;
            next();
        });

    });
});


Users.methods.comparePassword = function(candicatePassword,cb){
    bcrypt.compare(candicatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

var Users = mongoose.model('Users',Users);

module.exports ={
    Users : Users
};