const isItPossibleToSort = (array, k) => {
    if(k > 1) {
      return 'YES';
    }
    for(var j = 1; j < array.length; j++) {
      if(array[j - 1] > array[j]) {
        return 'NO';
      }
    }
    return 'YES'
  };
  
  var t = +readline();
  for(var i = 0; i < t; i++) {
    var vars = readline().split(' ').map(item => +item);
    print(isItPossibleToSort(readline().split(' ').map(item => +item), vars[1]));
  }
  