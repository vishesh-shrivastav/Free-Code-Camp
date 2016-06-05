function convertHTML(str) {
  // &colon;&rpar;
  var strArr = str.split('');
  for(var i=0; i < strArr.length; i++){
    switch(strArr[i]){
      case '<':
        strArr[i] = '&lt;';
        break;
      case '&':
        strArr[i] = '&amp;';
        break;
      case '>':
        strArr[i] = '&gt;';
        break;
      case '"':
        strArr[i] = '&quot;';
        break;
      case "'":
        strArr[i] = '&apos;';
        break;
    }
  }
  strArr = strArr.join('');
  return strArr;
}

convertHTML("Dolce & Gabbana");
