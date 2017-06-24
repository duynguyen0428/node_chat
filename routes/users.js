var express = require('express');
var router = express.Router();

//require passport 
var passport = require('passport');

// User service
var userService = require('../services/users-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET users listing. */
router.post('/register', function(req, res, next) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    userService.register(username,email,password,function(err){
        if(err){
          res.status(400).json(err);
        }
        res.status(201).json({success:"successfully create user"});
    });

});

//login
router.post('/login',function(req, res, next){
    passport.authenticate('local',function(err,user){
      if (err) {
        res.status(400).json({
          success: false,
          message: 'Could not verify credentials'
        });
      };
      req.login(user,function(err){
        if(err) {
          res.status(400).json({
          success: false,
          message: 'Could not verify credentials'
        });
        }
        res.status(200).json({
          success: true,
          message: 'Successfully logged in!',
          user:user        
        });
      });
    })(req,res,next);
});
module.exports = router;
