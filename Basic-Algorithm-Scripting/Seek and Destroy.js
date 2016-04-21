function destroyer(arr) {
  // Remove all the values
  var arr1 = arguments[0];
  var arr2 = [];
  for(var i = 1; i < arguments.length; i++){
	arr2.push(arguments[i]);
    }
  function removeFrom(x){
        if (arr2.indexOf(x) === -1){
	  return true;
	}
	return false;
    }
  return arr.filter(removeFrom);
}
