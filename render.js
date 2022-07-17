const express = require('express');

const app = express();

app.use("/public",express.static(__dirname+"/public"));

app.set("view engine","ejs")

app.listen(3001);

app.get("/hello/:nameParam", (req,res) => {
  res.render("hello", {name: req.params.nameParam});
    //쿼리랑 파람 차이가 먼데요 ㅡㅡ
})

