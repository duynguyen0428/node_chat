// 'use strict';
// var path = require('path');
// var Users = require(path.join(__dirname,'../../models/users')).Users;

// // var jwt = require('jsonwebtoken');
// const PassportLocalStrategy = require('passport-local').Strategy;

// // var passportJWT = require("passport-jwt");  
// // var ExtractJwt = passportJWT.ExtractJwt;  
// // var Strategy = passportJWT.Strategy;
// var passport = require('passport');

// // var params = {  
// //     secretOrKey: config.jwtSecret,
// //     jwtFromRequest: ExtractJwt.fromAuthHeader()
// // };

// passport.use(new PassportLocalStrategy({
//     usernameField:"email",
//     passowrdField:"password",
//     session:true,
//     passReqToCallback:true
// },function(req,email,password,done)
// {
//  Users.findOne({email:email},
//     function(err,user){
//         if(err){
//             return done(err);
//         }

//         if(!user){
//             var err = new Error("Can't find user with given email");
//             return done(err);
//         }

//         user.comparePassword(password,function(err,isMatched){
//             if(err) return done(err);
//             if(!isMatched){
//                 var error = new Error('Incorrect email or password');
//                 error.name = 'IncorrectCredentialsError';
//                 return done(error);
//             }

//             // const payload = {
//             //     sub: user._id
//             // };

//             // create a token string
//             // const token = jwt.sign(payload, config.jwtSecret);
//             // const data = {
//             //     email: user.email
//             // };

//             return done(null,user);
//         });
//     });
// }));

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   Users.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// module.exports = passport;
module.exports = function() {
    var path = require('path');
    var passport = require('passport');
    var passportLocal = require('passport-local');
    var userService = require('../../services/users-service');
    var Users = require(path.join(__dirname,'../../models/users')).Users;

    passport.use(new passportLocal.Strategy({
        usernameField: 'email'
    }, function(email, password, next) {
        Users.findOne({email:email}, function(err, user) {
            if (err) {
                return next(err);
            }
            // if (!user || user.password !== password) {
            //     return next(null, null);
            // }

            user.comparePassword(password,function(err,isMatched){
                if(err) return done(err);
                if(!isMatched){
                    var error = new Error('Incorrect email or password');
                    error.name = 'IncorrectCredentialsError';
                    return done(error);
                }

                // const payload = {
                //     sub: user._id
                // };

                // create a token string
                // const token = jwt.sign(payload, config.jwtSecret);
                // const data = {
                //     email: user.email
                // };

                return next(null, user);
            });

        });
    }));

    passport.serializeUser(function(user, next) {
        next(null, user.email);
    });

    passport.deserializeUser(function(email, next) {
        Users.find({email:email}, function(err, user) {
            next(err, user);
        });
    });
};
