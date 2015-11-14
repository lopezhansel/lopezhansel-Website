var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(__dirname + '/public'));

app.get('/',function  (req,res) {
	res.sendFile('index.html',{root: './public'});
});


app.get('/mapMe',function  (req,res) {
	res.send('Welcome to MapMe');
});
var port = 3000;
app.listen(port, function() {
	console.log('started Lopezhansel.com on port: ', port, Date());
});