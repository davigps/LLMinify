var t = parseInt(readline(), 10);
for (var i = 0; i < t; i++) {
    var n = parseInt(readline(), 10);
    var s = readline();
    var containsZero = false;
    for (var j = 0; j < n; j++) {
        if (s[j] === '0') {
            containsZero = true;
            break;
        }
    }
    if (containsZero) print("YES\n");
    else print("NO\n");
}
