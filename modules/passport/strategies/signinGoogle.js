const GoogleStrategy = require('passport-google-oauth20').Strategy
const daoUser=require('../../../dao/daoUser')

module.exports=function(passport){
    passport.use(new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "http://www.example.com/auth/google/callback"
          },(accessToken, refreshToken, profile, done)=>{
              console.log(profile)
              if(profile){
                  daoUser.create(profile)
                    .then(user=>{
                        done(null,user)
                    })
              }
              done(null,profile)
    }))
}