// noprotect
// Algo - check if a number is Fibonacci or not. If it is Fibonacci and odd, add it to the sum. Return sum.
// If number n is Fibonacci, 5(n^2)+4 or 5(n^2)-4 are perfect squares

//Helper function for checking if a number is a perfect square.
function isPerfectSquare(x){
	var root = Math.sqrt(x);
	return Number.isInteger(root);
}

//Helper function for checking if a number is Fibonacci.
function checkFib(n){
	var a = 5*(Math.pow(n,2)) + 4;
	var b = 5*(Math.pow(n,2)) - 4;
	return (isPerfectSquare(a) || isPerfectSquare(b));
}

//Final function to return sum of odd Fibonacci numbers.
function sumFibs(num){
var sumArr = [0,1];
    for(var i=1; i <= num; i++){
    	if(checkFib(i) && i%2 !== 0){
    		sumArr.push(i);
    	}
    }
    var result = 0;
    for(var a=0; a < sumArr.length; a++){
    	result += sumArr[a];
    }
  return result;
}

sumFibs(4000000);
