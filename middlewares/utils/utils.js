module.exports = function (app, express) {
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    // var logger = require('logger');
    var path = require('path');
    var favicon = require('serve-favicon');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
    var session = require('express-session');
    var sessionStore = require('connect-mongo')(session);

    // app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    // app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, '../../client')));

    //use session
    app.use(session({
        secret: 'getting hungry',
        saveUninitialized: false,
        resave: false,
        store: new sessionStore({
            url : 'mongodb://duynguyen0428:cuongduy0428@ds135812.mlab.com:35812/node_chat'
            // url: require('../../config/conf').sessionSTOREURL,
        })
    }));
}