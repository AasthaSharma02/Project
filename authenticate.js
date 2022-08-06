var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken');

var config = require('./config');

//user authentication function supported by passport local mongoose
exports.local = passport.use(new LocalStrategy(User.authenticate()));
//for support for sessions in passport
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function (user) {
    //inside is the paylod info
    return jwt.sign(user, config.secretKey,
        {expiresIn: 3600})
};

var opts = {};
//in incoming request, token will be included in auth header
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(new JwtStrategy(opts,
    (jwt_payload, done) => {
        console.log("JWT paylod: ", jwt_payload);
        //searching for user with the given id
        User.findOne({_id: jwt_payload._id}, (err, user) => {
            if (err) {
                //done takes 3 params: (error: any, user?: any, info?: any)
                //user and info are optional params
                return done(err, false);
            } else if (user) {
                //no err so null, and then user as 2nd param
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
    })
);
//strategy is jwt stratey. token will be extracted from auth header and use to authnticate
//will go forward if successful, returns an error if fails
exports.verifyUser = passport.authenticate('jwt', {session: false})

exports.verifyAdmin = function (req, res, next) {
    if (req.user.admin === true) {
        next();
    } else {
        err = new Error('You are not authorized to perform this operation!')
        err.status = 403;
        next(err);
    }

}