const getMinVolume = (array, x) => {
    var volumes = [array[0]];
    for(var j = 1; j < array.length; j++) {
      volumes.push(array[j] - array[j - 1]);
    }
    return Math.max(...volumes, (x - array[array.length - 1]) * 2);
  };
  
  var t = +readline();
  for(var i = 0; i < t; i++) {
    var vars = readline().split(' ').map(item => +item);
    print(getMinVolume(readline().split(' ').map(item => +item), vars[1]));
  }
  