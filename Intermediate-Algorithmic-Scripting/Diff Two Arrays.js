function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  // Same, same; but different.
  function checkForIntersection(x){
    if(arr1.indexOf(x) == -1 || arr2.indexOf(x) == -1){
      return x;
    }
  }
  return newArr.filter(checkForIntersection);
}
