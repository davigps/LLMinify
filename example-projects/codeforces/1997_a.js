const getNewPassword = (str) => {
    for(var j = 1; j < str.length; j++) {
      if(str[j - 1] === str[j]) {
        return str.slice(0, j) + (str[j] !== 'a' ? 'a' : 'b') + str.slice(j);
      }
    }
    return (str[0] !== 'a' ? 'a' : 'b') + str;
  };
  
  var t = +readline();
  for(var i = 0; i < t; i++) {
    print(getNewPassword(readline()));
  }