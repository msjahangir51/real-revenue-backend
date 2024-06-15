const passport = require('passport');
const { users } = require('../models/users.model');
const { SECRET_KEY } = require('../secret');

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET_KEY;
passport.use(new JwtStrategy(opts,async(jwt_payload, done)=>{
    await users.findById(jwt_payload.id).then((user)=>{
        if(user) return done(null,user);
        return done(null,false);
    }).catch((err)=> console.error(err))
}));