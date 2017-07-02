var express = require('express');
var router = express.Router();

var GuestService = require('../services/guests-service');

router.get('/', function (req, res, next) {
    GuestService.getAllGuests(function (err, allguests) {
        // console.log(allguests,err);
        if (err) {
            return res.status(400).json(err);
        } else {
            return res.status(200).json({ Guests: allguests });
        }
    });
});

router.post('/add', function (req, res, next) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var relationship = req.body.relationship;
    var side = req.body.side;
    var NOA = req.body.NOA;
    console.log("req body: " + req);

    GuestService.addGuest(fname, lname, relationship, side, NOA, function (err) {
        console.log(err);
        if (err) {
            return res.status(401).json(err);
        }
        return res.status(201).json({ message: "Successfully add guest" });
    });

});

router.post('/remove', function (req, res, next) {
    var fname = req.body.first_name;
    var lname = req.body.last_name;
    var relationship = req.body.relationship;
    var side = req.body.side;
    var NOA = req.body.numberOfAttendants;
    GuestService.removeGuest(fname, lname, relationship, side, function (err, guest) {
        if (err) {
            return res.status(401).json(err);
        }
        return res.status(200).json(guest);
    });
});

module.exports = router;