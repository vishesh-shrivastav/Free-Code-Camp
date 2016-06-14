function binaryAgent(str) {
  a = str.split(' ');
  b = [];
  c = [];
  for(var i=0; i < a.length; i++){
  	b.push(parseInt(a[i], 2));
  }
  for(var x=0; x<b.length; x++){
  	c.push(String.fromCharCode(b[x]));
  }
  return c.join('');
}
