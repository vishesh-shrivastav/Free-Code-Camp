
function dropElements(arr, func) {
  // drop them elements.
  //Important! - assign fixed variable to arr.length as length of array keeps changing with each iteration.
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
