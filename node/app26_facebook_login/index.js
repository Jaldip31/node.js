//556482872585
//eca27e79f6c30fc143810ca44c7c6

const express = require("express")
const passport = require("passport")
// const session = require("express-session")
const FacebookStrategy = require("passport-facebook").Strategy

const app = express()
app.listen(5252, () => {
    console.log('server running...',);
})

app.use(passport.initialize());
// app.use(passport.session());
// app.use(session({secret:"thisis12345"}))

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

passport.use(new FacebookStrategy({
    clientID: 556482872585,
    clientSecret: 'eca2abf9f6c30fc143810ca44c7c6',
    callbackURL: "http://localhost:5252/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('profile',profile);
    console.log('profile.id',profile.id);
    // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb( "user hiiiiiiiiii");
    // });
    // return "HIIIIIIIIIIIIIII"
  }
));

app.get('/auth/facebook',
  passport.authenticate('facebook'));
// passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// app.get('/auth/google',passport.authenticate('google',{scope:['profile']}))

// app.get('/test',passport.authenticate('google',{failureRedirect:'/auth/fail'}),(req,res,next)=>{
//     console.log(req.user,req.isAuthenticated());
//     res.send("user is logged in")
// })
// app.get('/auth/fail',(req,res,next)=>{
//     res.send('user logged in failed')
// })
// app.get('/logout',(req,res,next)=>{
//     req.logOut()
//     console.log(req.isAuthenticated());
//     res.send('user logged out ')
// })
