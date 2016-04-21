function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if(howMany === 0){
    return arr;
  }
  else if(howMany > arr.length){
    return [];
  }
  var newArr = arr.splice(0,howMany);
  return arr;
}
