const isTheAllPassengersFollowedTheRecommendations = (array) => {
    var arr = new Array(array.length + 2).fill(0);
    arr[array[0]]++;
    for(var j = 1; j < array.length; j++) {
      var index = array[j];
      if(arr[index - 1] !== 0 || arr[index + 1] !== 0) {
        arr[index]++;
        continue;
      }
      return 'NO';
    }
    return 'YES';
  };
   
  var t = +readline();
  for(var i = 0; i < t; i++) {
    readline();
    print(isTheAllPassengersFollowedTheRecommendations(readline().split(' ').map(item => +item)));
  }