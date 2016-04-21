function repeatStringNumTimes(str, num) {
  // repeat after me
  var resArr = [];
  if (num < 0){
    return "";
  }
  else{
    for (var i = 0; i < num; i++){
      resArr.push(str);
    }
  }
  var resStr = resArr.join('');
  return resStr;
}

repeatStringNumTimes("abc", 3);
