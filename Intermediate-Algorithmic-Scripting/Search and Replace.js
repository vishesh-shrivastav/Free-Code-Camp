function myReplace(str, before, after) {
  console.log(before[0]);
  // If first letter of 'before' is uppercase, make the first letter of 'after' uppercase.
  // Since strings are immutable, we first convert the string to an Array before changing its value.
  if (before[0] === before[0].toUpperCase()){
    after = after.split('');
    after[0] = after[0].toUpperCase();
    after = after.join('');
    console.log(after);
  }
  else if (before[0] === before[0].toLowerCase()) {
  // If first letter of 'before' is lowercase, make the first letter of 'after' lowercase.
  // Since strings are immutable, we first convert the string to an Array before changing its value.
    after = after.split('');
    after[0] = after[0].toLowerCase();
    after = after.join('');
    console.log(after);
  }
  var strArr = str.split(' ');
  var x = strArr.indexOf(before);
  strArr[x] = after;
  var resStr = strArr.join(' ');
  return resStr;
}
