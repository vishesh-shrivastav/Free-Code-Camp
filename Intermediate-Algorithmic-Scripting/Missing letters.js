function fearNotLetter(str) {
  var strArr = str.split('');
  for (var i=0; i<strArr.length; i++){
    //Find the code for current character
    var charCodeCurrent = str.charCodeAt(i);
    if (charCodeCurrent != str.charCodeAt(0) + i){//check if it is equal to sum of char code of first letter and i
      return String.fromCharCode(charCodeCurrent -1);//return required char
    }
  }
  return undefined;
}

fearNotLetter("abce");
