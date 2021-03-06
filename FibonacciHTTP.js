var express = require('express');
var app = express();
var Fibonacci = require('./Fibonacci.js');
app.get('/:number', function (req, res) {
	let number = req.params.number;  
	var results = {n: Fibonacci.fibonacci(number), "n-1": Fibonacci.fibonacci(number-1)}
	res.json(results);
});
var server = app.listen(3002, function () {
	  console.log('Servidor ejecutandose en localhost:3002');
});
