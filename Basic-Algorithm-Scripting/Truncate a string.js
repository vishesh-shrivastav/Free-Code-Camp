function truncateString(str, num) {
  // Clear out that junk in your trunk
  var dotStr = '...';
  if (str.length <= num){
    return str;
  }
  else if(num <= 3){
    var strSmall = str.slice(0,num);
    var resStrSmall = strSmall.concat(dotStr);
    return resStrSmall;
  }
  else{
    var strNew = str.slice(0,num-3);
    var resStr = strNew.concat(dotStr);
    return resStr;
}
}
