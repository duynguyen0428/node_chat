module.exports =  function(app){
    /* 
    * organize routes
    */
    var index = require('./index');
    var users = require('./users');
    var guests = require('./guests');

    var loginRequired = require('../middlewares/auth/authenticateRequired'); 

    app.use('/', index);
    app.use('/users', users);
    app.use('/guests',guests);

};