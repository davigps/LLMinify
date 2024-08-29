function prefix_function(s) {
    var n = s.length;
    var p = [];
    for (var i = 0; i < n; i++) p[i] = 0;
    for (var i = 1; i < n; i++) {
        var j = p[i - 1];
        while (j > 0 && s[j] !== s[i]) j = p[j - 1];
        if (s[i] === s[j]) j++;
        p[i] = j;
    }
    return p;
}

function solution() {
    var s = readline();
    var n = s.length;
    var p = prefix_function(s);
    if (p[n - 1] * 2 > n) {
        print("YES");
        print(s.substring(0, p[n - 1]));
    } else {
        print("NO");
    }
}

solution();
