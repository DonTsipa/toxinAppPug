var express = require('express');
var app = express();
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({extended: false});

/*app.get('/',function(req,res){
  res.send('')
});*/
app.get("/", urlencodedParser, function (request, response) {
      response.render(__dirname + "/dist/index.pug");
  });
app.get("/search", urlencodedParser, function (request, response) {
      response.sendFile(__dirname + "/dist/search.html");
  });
app.post('/search',urlencodedParser, function (request, response) {
  if(!request.body) return response.sendStatus(400);
  console.log(request.body);
  response.send([`${request.body.indexDatefrom} - ${request.body.indexDateto}`,{'adults':request.body.adults,'children':request.body.children,'babies':request.body.babies}]);
});

app.listen(8080);