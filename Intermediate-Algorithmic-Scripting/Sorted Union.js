function uniteUnique(arr) {
  var resArr = [];
  for (var i=0; i < arguments.length; i++){
	  for(var a=0;a<arguments[i].length;a++){
	  	if(resArr.indexOf(arguments[i][a]) == -1){
	  		resArr.push(arguments[i][a]);
	  	}
	  }
    
  }
  return resArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
