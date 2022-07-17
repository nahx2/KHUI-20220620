const express = require('express');

const app = express()
//nodejs로부터 요청객체와 응답 객체는 주입 받음

app.listen(3000);

app.get("/kh/:id", (req, res) => {
  
  // console.log(req.params);
  // console.log(req.params.id);
  // console.log(req.query);
  console.log(`mem_id: ${req.query.mem_id}, mem_pw: ${req.query.mem_pw}`);
  // res.send(`<font color = red>${req.query.mem_id}</font>`);
  // res.json({"mem_id":"apple"});
  res.sendStatus(400);
  return;
});

/*
  http://localhost:3000/kh/tomato -> id값은 tomato
  http://localhost:3000/kh/tomato?mem_id=apple&mem_pw=123
*/