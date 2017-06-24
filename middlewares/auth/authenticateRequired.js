module.exports = function(req,res,next){
    if(req.Authenticated){
        next();
    }
    res.redirect('/');
}