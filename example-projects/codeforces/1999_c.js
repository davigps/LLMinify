// Read number of test cases
var t = parseInt(readline());

// Loop through each test case
for (var i = 0; i < t; i++) {
    // Read n, s, m values
    var input = readline().split(' ');
    var n = parseInt(input[0]);
    var s = parseInt(input[1]);
    var m = parseInt(input[2]);
    
    // Read the time intervals
    var intervals = [];
    for (var j = 0; j < n; j++) {
        var interval = readline().split(' ');
        var li = parseInt(interval[0]);
        var ri = parseInt(interval[1]);
        intervals.push([li, ri]);
    }
    
    // Check for possible shower time
    var canShower = false;
    
    // Check before the first interval
    if (intervals[0][0] >= s) {
        canShower = true;
    }
    
    // Check between intervals
    for (var j = 1; j < intervals.length; j++) {
        if (intervals[j][0] - intervals[j - 1][1] >= s) {
            canShower = true;
            break;
        }
    }
    
    // Check after the last interval
    if (m - intervals[intervals.length - 1][1] >= s) {
        canShower = true;
    }
    
    // Output result for this test case
    print(canShower ? 'YES' : 'NO');
}
