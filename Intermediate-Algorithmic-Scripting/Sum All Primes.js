function isPrime(n){
  if(n < 2) return false;
  if(n == 2) return true;
  for(var i=2; i<=Math.sqrt(n); i++){
    if(n%i === 0){
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  var result = 0;
  var primeArr = []
  for(var a=0; a <= num; a++){
    if(isPrime(a)){
      result += a;
      primeArr.push(a);
    }
  }
  return result;
}
sumPrimes(10);
