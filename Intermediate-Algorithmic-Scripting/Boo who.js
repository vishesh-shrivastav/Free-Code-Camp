function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  var boolArr = [0, -0, null, false, NaN, undefined, "", true];
  if (boolArr.indexOf(bool) != -1){
    return true;
  }
  return false;
}

booWho(null);
