function solve() {
    var n = parseInt(readline());

    if (n % 2 === 1) {
        var r = n;
        var l = 1;
        var result = [];

        for (var i = 1; i <= n; i++) {
            if (i % 2 === 1) {
                result.push(r);
                r--;
            } else {
                result.push(l);
                l++;
            }
        }

        print(result.join(' '));
    } else {
        print(-1);
    }
}

function main() {
    var t = parseInt(readline());
    while (t--) {
        solve();
    }
}

main();
