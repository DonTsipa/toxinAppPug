var express = require('express');
const app = express();
const path=require('path');
const search = require('./search');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(path.join(__dirname,'dist')));

/*app.get("/search", urlencodedParser, function (request, response) {
        response.sendFile(__dirname + "./dist/search.html");
    });*/

app.post('/search',urlencodedParser,search)

module.exports = app;