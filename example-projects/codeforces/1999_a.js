const getSumNumber = (number) => {
    var ans = number.toString().split('');
    return (+ans[0]) + (+ans[1]);
  };
   
  var t = +readline();
  for(var i = 0; i < t; i++) {
    print(getSumNumber(+readline()));
  }