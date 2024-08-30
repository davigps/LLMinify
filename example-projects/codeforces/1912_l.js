function divideTable(n, table) {
    var friendLoafs = 0
    var friendOnions = 0
    for(var i = 0; i < n; i++) {
        if(table[i] === 'L') {
            friendLoafs = friendLoafs + 1;
        } else {
            friendOnions = friendOnions + 1;
        }
    }
    var myLoafs = 0;
    var myOnions = 0;
    for(var i = 0; i < n; i++) {
        if(table[i] === 'L') {
            myLoafs = myLoafs + 1
            friendLoafs = friendLoafs - 1;
        } else {
            myOnions = myOnions + 1
            friendOnions = friendOnions -1;
        }
        if (friendLoafs + friendOnions > 0 &&
            friendLoafs != myLoafs &&
            friendOnions != myOnions &&
            myLoafs + myOnions > 0) {
                return myLoafs + myOnions;
            }
    }
    return -1
}
var x = parseInt(readline())
var table = readline()
print(divideTable(x, table))
