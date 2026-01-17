// You have to create a middleware for rate limiting a users request based on their username passed in the header

const express = require('express');
const { use } = require('react');
const app = express();

// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second
let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser={};
}, 1000)

app.use((req,res,next)=>{
   const userid = req.headers["user-id"];
  //  if(!userid){
  //   res.status(400).json({
  //     error:"user-id is missing"
  //   })
  //  }
   numberOfRequestsForUser[userid]= 0;
   numberOfRequestsForUser[userid]++;
  if(numberOfRequestsForUser[userid]>5){
    res.status(404).json({
      error:"request limit exceeded"
    })
  }else{
    next();
  }
})

app.get('/user', function(req, res) {

  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
 
 //how the fuck this , because this - will separate and make 2 words???
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
app.listen(3000);