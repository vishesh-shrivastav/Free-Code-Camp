function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.length === target.length){
    return (str === target);
  }
  else {
  var startSubstrIndex = str.length - target.length;
  var backString = str.substr(startSubstrIndex,target.length);
  return (backString === target);
  }
} 
