
function truthCheck(collection, pre) {
  // Is everyone being true?
  var count = 0;
  for(var a in collection){
    if(collection[a].hasOwnProperty(pre) && Boolean(collection[a][pre])){
      count += 1;
    }
  }
  return (count == collection.length);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
