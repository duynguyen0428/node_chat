var express = require('express');
var router = express.Router();

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
module.exports = router;
