var express = require('express');
var app = express();
var Fibonacci = require('./Fibonacci');
app.get('/:number', function (req, res) {
	let number = req.params.number;  
	res.send('El numero ingresado es: '+Fibonacci(number));
});
var server = app.listen(3000, function () {
	  console.log('Servidor ejecutandose en localhost:3000');
	  console.log(typeof Fibonacci);
});
