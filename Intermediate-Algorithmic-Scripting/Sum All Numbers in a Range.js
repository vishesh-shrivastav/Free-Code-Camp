function sumAll(arr) {
  sortedArr = arr.sort(function(a,b){
	return a - b;});
  var sum = 0;
  var min = sortedArr[0];
  var max = sortedArr[1];
  for(var i = min; i <= max; i++){
    sum += i;
  }
  return sum;
}
