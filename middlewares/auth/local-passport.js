'use strict';
module.exports.initialize = function() {
    var path = require('path');
    var passport = require('passport');
    var passportLocal = require('passport-local');    
    var Users = require(path.join(__dirname,'../../models/users')).Users;

    passport.use(new passportLocal.Strategy({
        usernameField: 'email'
    }, function(email, password, next) {
        Users.findOne({email:email}, function(err, user) {
            if (err) {
                return next(err);
            }

            user.comparePassword(password,function(err,isMatched){
                if(err) return done(err);
                if(!isMatched){
                    var error = new Error('Incorrect email or password');
                    error.name = 'IncorrectCredentialsError';
                    return done(error);
                }

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
