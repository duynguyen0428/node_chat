var express = require('express');
var router = express.Router();

//require passport 
var passport = require('passport');

// User service
var userService = require('../services/users-service');

//Use jsonwebtoken
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

const SECRECT_KEY = require('../config/conf').sessionSECRECT;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('login page');
});


/* GET users listing. */
router.post('/register', function(req, res, next) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    userService.register(username,email,password,function(err){
        if(err){
          return res.status(400).json(err);
        }else{
          return res.status(201).json({success:"successfully create user"});
        }
    });

});

//login
router.post('/login',function(req, res, next){
    passport.authenticate('local',function(err,user){
      if (err) {
        return res.status(400).json({
          success: false,
          message: 'Could not verify credentials'
        });
      }
      else{
        
      req.login(user,function(err){
        if(err) {
            return res.status(400).json({
            success: false,
            message: 'Could not verify credentials'
          });
        }
        var token = jwt.sign(user,SECRECT_KEY,{expiresIn: 86400});

        return res.header({auth:token}).status(200).json({
          success: true,
          message: 'Successfully logged in!',
          user:user        
        });
      });
    }})(req,res,next);
});

router.post('/verifyemail',function(req,res,next){
  var email = req.body.email;
  userService.findUserByEmail(email,function(err,user){
    if(err){
        res.status(401).json({error:"Error"});
    }else{
        res.json(user);
    }
  });
});

router.post('/verifyusername',function(req,res,next){
  var username = req.body.username;
  userService.findUserByUserName(username,function(err,user){
    if(err){
        res.status(401).json({error:"Error"});
    }else{
        res.json(user);
    }
  });
});

//logout
router.post('/logout',function(req, res, next){
  req.logOut();
  res.redirect('/');
});

module.exports = router;
