'use strict';
var path = require('path');
var Users = require(path.join(__dirname,'../../models/users')).Users;

// var jwt = require('jsonwebtoken');
const PassportLocalStrategy = require('passport-local').Strategy;

// var passportJWT = require("passport-jwt");  
// var ExtractJwt = passportJWT.ExtractJwt;  
// var Strategy = passportJWT.Strategy;
var passport = require('passport');

// var params = {  
//     secretOrKey: config.jwtSecret,
//     jwtFromRequest: ExtractJwt.fromAuthHeader()
// };

module.exports = new PassportLocalStrategy({
    usernameField:"email",
    passowrdField:"password",
    session:true,
    passReqToCallback:true
},function(req,email,password,done)
{
 return Users.findOne({email:email},
    function(err,user){
        if(err){
            return done(err);
        }

        if(!user){
            var err = new Error("Can't find user with given email");
            return done(err);
        }

        return user.comparePassword(password,(err,isMatched)=>{
            if(err) return done(err);
            if(!isMatched){
                var error = new Error('Incorrect email or password');
                error.name = 'IncorrectCredentialsError';
                return done(error);
            }

            const payload = {
                sub: user._id
            };

            // create a token string
            // const token = jwt.sign(payload, config.jwtSecret);
            // const data = {
            //     email: user.email
            // };

            return done(null);
        });
    });
});

