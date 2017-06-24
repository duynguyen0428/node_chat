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
        }
        next(null);
    })
};

//