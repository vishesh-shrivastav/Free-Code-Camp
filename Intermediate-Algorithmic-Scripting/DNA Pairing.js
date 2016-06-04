function pairElement(str) {
  var basePairs = {'A':'T', 'T':'A','C':'G','G':'C'};
  var resArr = [];
  var strArr = str.split('');
  for(var i=0; i < strArr.length; i++){
    var basePairArr = [];
    basePairArr.push(strArr[i]);
    basePairArr.push(basePairs[strArr[i]]);
    resArr.push(basePairArr);	
  }
  return resArr;
}

pairElement("GCG");
