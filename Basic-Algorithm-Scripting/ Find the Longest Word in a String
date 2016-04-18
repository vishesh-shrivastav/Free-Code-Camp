function findLongestWord(str) {
  var splittedStr = str.split(" ");
  var lengthArr = [];
  for(var i = 0; i < splittedStr.length; i++){
    lengthArr.push(splittedStr[i].length);
  }
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  return getMaxOfArray(lengthArr);
}

findLongestWord("The quick brown fox jumped over the lazy dog"); //6
