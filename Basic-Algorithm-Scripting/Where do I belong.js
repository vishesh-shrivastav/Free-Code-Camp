function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  var x = arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}
