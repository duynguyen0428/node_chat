var Users = require('../models/users').Users;

/*
* register new user
* @param : username, email, password
* @return: 
*/
module.exports.register = function(username,email,password,next){
    var newUser = new Users({
        username : username,
        email : email,
        password : password
    });
    newUser.save(function(err){
        if(err){
            next(err);
        }else{
            next(null);
        }
    });
};

module.exports.findUserByUserName = function(username,next){
    Users.findOne({username:username},function(err,user){
        if(err){
            next(err);
        }else{
            if(!user){
                next(null,null);
            }else{
                next(null,user);
            }
        }
    });
};

module.exports.findUserByEmail = function(email,next){
    Users.findOne({email:email},function(err,user){
        if(err){
            next(err);
        }else{
            if(!user){
                next(null,null);
            }else{
                next(null,user);
            }
        }
    });
};

//