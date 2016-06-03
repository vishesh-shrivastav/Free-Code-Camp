function translatePigLatin(str){
  var strArr = str.split('');
  var consonants = '';
  var vowelList = 'aeiouAEIOU';
  if (vowelList.indexOf(strArr[0]) != -1){
    return str + 'way';
  } 
  else{
    for(var i = 0; i < strArr.length; i++){
      if(vowelList.indexOf(strArr[i]) == -1){
        consonants += strArr[i];
	console.log(consonants);
      }
      else return strArr.slice(consonants.length).join('') + consonants + 'ay';
    }
  }
  
  //return str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm"));
