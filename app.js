const express=require('express');
const app=express();
const morgan=require('morgan');//don't forget npm install morgan or
//npm i --save morgan

app.use(morgan('dev'));

app.get('/',function(req, res){
  //console.log('GET /');
  //console.log(req.headers);
  res.send('hello, welcome to our express app');
});

app.get('/news',function(req, res){
  //console.log('GET /');
  //console.log(req.headers);
  res.send('hello, welcome to the news section');
});

app.listen(3000,function(){
  console.log('server is listening on port 3000!');
});
