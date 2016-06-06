
function findElement(arr, func) {
  var arr1 = arr.filter(func);
  return arr1[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
