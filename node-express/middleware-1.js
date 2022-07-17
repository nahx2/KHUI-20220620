
const express = require('express');

const app = express()
//nodejs로부터 요청객체와 응답 객체는 주입 받음

app.listen(3002);


app.get("/", (req, res,next) => {
  
 console.log("first");
 //return; 을 쓰면 멈춤... 리턴 전까지만 함
 next();
});

app.get("/", (req, res,next) => {
  
 console.log("second");
 res.send('응답처리...');
 next();
});
app.get("/", (req, res) => {
  
 console.log("third");
});