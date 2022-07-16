//58228999-b70qsh9ih9qj9sv9r78uph5dqk4342m7.apps.googleusercontent.com
//GPX-5znCbz7p7S0ULRv7mULhvxB8Uqbs

const express = require("express")
const passport = require("passport")
const session = require("express-session")
const strategy = require("passport-google-oauth20").Strategy

const app = express()
app.listen(4000, () => {
    console.log('server running...',);
})

app.use(passport.initialize());
app.use(passport.session());
app.use(session({secret:"thisis12345"}))

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

passport.use(new strategy({
    clientID: '58229999-b70qsh9ih9qj9sv9r78uph5dqk4342m7.apps.googleusercontent.com',
    clientSecret: 'GPX-5znCbz7p7S0ULRv7mULhvxB8Uqbs',
    callbackURL: 'http://localhost:4000/test'
},
    function (accessToken, refreshToken, profile, done) {
        done(null, {})
    }
))

app.get('/auth/google',passport.authenticate('google',{scope:['profile']}))

app.get('/test',passport.authenticate('google',{failureRedirect:'/auth/fail'}),(req,res,next)=>{
    console.log(req.user,req.isAuthenticated());
    res.send("user is logged in")
})
app.get('/auth/fail',(req,res,next)=>{
    res.send('user logged in failed')
})
app.get('/logout',(req,res,next)=>{
    req.logOut()
    console.log(req.isAuthenticated());
    res.send('user logged out ')
})
