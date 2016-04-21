function rot13(str) { // LBH QVQ VG!
  var x = [];
  var y = [];
  for(var i=0; i < str.length; i++){
    x.push(str.charCodeAt(i)); //array x contains unicode values for all chars in str
  }
  for(var j = 0; j < x.length; j++){
    if((x[j] >= 32 && x[j] < 48) || (x[j] >=58 && x[j] < 65)){ //non-alphabetic characters
      y.push(String.fromCharCode(x[j]));//add them to y as they are
    }
    else if(x[j] <=77){
    y.push(String.fromCharCode(x[j] + 13));//for letters A to M
  }
    else{
    y.push(String.fromCharCode(x[j] - 13));//for letters N to Z
  }
  }
  return y.join('');
}
