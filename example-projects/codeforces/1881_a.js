const getMinCountOfOperations = (string1, string2) => {
    var count = 0;
    while(string1.length <= 50) {
      if(string1.indexOf(string2) !== -1) {
        return count;
      }
      string1 += string1;
      count++;
    }
    return -1;
  };
  
  var t = +readline();
  for(var i = 0; i < t; i++) {
    readline();
    print(getMinCountOfOperations(readline(), readline()));
  }
  