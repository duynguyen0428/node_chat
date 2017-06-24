var express = require('express');
var router = express.Router();

var GuestService = require('../services/guests-service');

router.get('/',function(req,res,next){
    GuestService.getAllGuests(function(err,allguests){
        if(err){
            res.status(400).json(err);
        }
        res.status(200).json(allguests);
    });
});

router.post('/add',function(req,res,next){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var relationship = req.body.relationship;
    var side = req.body.side;
    var NOA = req.body.NOA;

    GuestService.addGuest(fname,lname,relationship, side,NOA,function(err){
        if(err)
        {
           return res.status(401).json(err); 
        }
        return res.status(201).json();
    });

});

router.post('/remove',function(req,res,next){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var relationship = req.body.relationship;
    var side = req.body.side;
    var NOA = req.body.NOA;

    GuestService.removeGuest(fname,lname,relationship, side,function(err,guest){
        if(err)
        {
           return res.status(401).json(err) ;
        }
        return res.status(200).json();
    });
});

module.exports = router;