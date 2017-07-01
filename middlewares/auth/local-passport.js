module.exports.initialize = function(req,res,done) {
    var path = require('path');
    var passportLocal = require('passport-local');    
    var Users = require(path.join(__dirname,'../../models/users')).Users;
    var passport = require('passport');
    passport.use(new passportLocal.Strategy({
        usernameField: 'email'
    }, function(email, password, done) {
        Users.findOne({email:email}, function(err, user) {
            if (err) {
                return done(err);
            }

            user.comparePassword(password,function(err,isMatched){
                if(err) return done(err);
                if(!isMatched){
                    var error = new Error('Incorrect email or password');
                    error.name = 'IncorrectCredentialsError';
                    return done(error);
                }else{
                    return done(null, user);
                }
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
