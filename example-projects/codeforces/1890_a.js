function main() {
    var testCases = parseInt(readline(), 10);

    for (var t = 0; t < testCases; t++) {
        var n = parseInt(readline(), 10);
        var c = readline().split(" ").map(function(x) { return parseInt(x, 10); }).sort();
        var s = c[0] + c[n - 1];
        var mid = Math.floor(n / 2);
        var flag = true;

        for (var i = 1; i < mid; i++) {
            var cur1 = c[i] + c[n - 1 - (i - 1)];
            var cur2 = c[i] + c[n - 1 - i];

            if (cur1 !== s || cur2 !== s) {
                flag = false;
                break;
            }
        }

        if (n % 2 !== 0) {
            var cur1 = c[mid] + c[mid + 1];
            var cur2 = c[mid] + c[mid - 1];

            if (cur1 !== s && cur2 !== s) {
                flag = false;
            }
        }

        if (flag) {
            print("YES");
        } else {
            print("NO");
        }
    }
}

main();
