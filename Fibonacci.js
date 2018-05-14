module.exports = function(number) {
   this.fibonacci = function (number) { 
 	if (number < 1)
		return 0;
	if (number <= 2)
		return 1;
   return (fibonacci(this.number - 1) + fibonacci(this.number - 2));
 }
};
