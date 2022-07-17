// import express from "express"; // npm i --save-dev express
//NodeJS에서 CommeonJS 사용하면
// ES6 import express from "express" 와 같음
const express = require('express');
// NodeJS 에서 CommonJS사용하면????
// ES6 import experss from "express"와 같음
const app = express();

app.listen(3000);

app.get("/", (req,res) => {
  console.log("get");

  res.send("안녕하세요. 서버의 <font folor=red>응답</font>입니다");
})

