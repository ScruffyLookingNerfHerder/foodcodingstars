var express = require("express");
var router = express.Router();


router.get("/", function(req, res){

  res.render("index");
});


const passport = require('passport');

//auth login
router.get('/login',(req, res)=>{
  res.render('login');

});

//auth with google
router.get('/google',passport.authenticate('google',{
scope: ['profile']

}));

//auth logout
router.get('/logout', (req, res)=>{
  res.send('logging out');
})

module.exports = router;
