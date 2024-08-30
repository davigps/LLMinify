var t = parseInt(readline(), 10);
for (var _ = 0; _ < t; _++) {
    var n = parseInt(readline(), 10);
    var c = readline().split(" ").map(function(x) { return parseInt(x, 10); });
    c.sort(function(a, b) { return a - b; });
    var diff = 0;
    for (var i = 1; i < n; i++) {
        var d = c[i] - c[i - 1];
        var s = c[i + n] - c[i + n - 1];
        diff += d;
        diff += s;
    }
    print(diff + "\n");
    for (var i = 0; i < n; i++) {
        print(c[i] + " " + c[i + n] + "\n");
    }
}
