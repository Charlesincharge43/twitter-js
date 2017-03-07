const express=require('express');
const app=express();
const morgan=require('morgan');//don't forget npm install morgan or
//npm i --save morgan
const nunjucks=require('nunjucks');
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
const routes=require('./routes');
app.use('/', routes);
app.use(express.static('public'));//Remember, if you are using static routing,
// you have to get rid of your res.sendFile functions in index.js or you may run into conflicts

//{'index', {title: 'Hall of Fame', people: people}


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
//nunjucks.configure('views'); // point nunjucks to the proper directory for templates
nunjucks.configure('views', {noCache: true}); //since we're developing, we don't want cache
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

app.use(morgan('dev'));

// app.get('/',function(req, res){
//   //console.log('GET /');
//   //console.log(req.headers);
//
//   // res.render( 'index', {title: 'Hall of Fame', people: people} );
//   res.render( 'index', locals );
//
//   //res.send('hello, welcome to our express app');
// });
//
// app.get('/news',function(req, res){
//   //console.log('GET /');
//   //console.log(req.headers);
//   res.send('hello, welcome to the news section');
// });

app.listen(3000,function(){
  console.log('server is listening on port 3000!');
});
