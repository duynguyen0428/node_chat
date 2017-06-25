var Guests = require('../models/weddingguest').Guests;

module.exports.addGuest = function(fname,lname,relationship, side,numberOfattend,next)
{
    var newGuest = new Guests({
    first_name:fname,    
    last_name:lname,
    relationship:relationship,
    side :side,
    numberOfAttendants:numberOfattend
});

    newGuest.save(function(err){
        if(err) return next(err);
        next();
    });
};

module.exports.removeGuest = function(fname,lname,relationship,side,next){
    Guests.find({first_name:fname,last_name:lname,relationship:relationship,side:side},function(err,guest){
        if(err) next(err);
        Guests.findByIdAndRemove({_id:guest._id},select).exec(function(err,guest){
            if(err) next(err);
            next(null,guest);
        });
    });
};

module.exports.getAllGuests = function(next){
    Guests.find({})
          .exec(function(err,allguests){
            next(err,allguests);
        });
};

module.exports.updateGuest = function(){

};

module.exports.getGuestById = function(id,next){
     Guests.findById(id)
           .exec(function(err,guest){
                if(err) next(err);
                next(null,guest);
            }
    );
};

module.exports.getGuestByFnameLname = function(fname,lname,relationship,next){
    Guests.find({first_name:fname,last_name:lname,relationship:relationship},function(err,guest){
        if(err) next(err);
            next(null,guest);
    });
};