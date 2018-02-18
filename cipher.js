function rot13(str) {
  newArray = [];
  for (var i = 0; i < str.length; i++) {
    newArray.push(str.charCodeAt(i));
  }
  newArray = newArray.map(function(val) {
    if (val > 64 && val < 78) {
      return val + 13;
    } else if (val > 77 && val < 91) {
      return val - 13;
    } else return val;
  });
  newArray = newArray
    .map(function(val) {
      return String.fromCharCode(val);
    })
    .join('');
  return newArray;
}
rot13("SERR PBQR PNZC");
