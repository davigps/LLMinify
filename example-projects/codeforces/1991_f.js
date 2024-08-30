function solve() {
    var input = readline().split(' ');
    var n = parseInt(input[0]);
    var m = parseInt(input[1]);
    var a = [];
    
    input = readline().split(' ');
    for (var i = 0; i < n; i++) {
        a[i] = parseInt(input[i]);
    }

    while (m--) {
        var lr = readline().split(' ');
        var l = parseInt(lr[0]) - 1;
        var r = parseInt(lr[1]) - 1;

        if (r - l + 1 > 48) {
            print("YES");
            continue;
        } else {
            var v = [];
            for (var i = l; i <= r; i++) {
                v.push(a[i]);
            }
            var ok = 0;
            var cnt = 0;
            v.sort(function(a, b) { return a - b; });
            for (var i = 0; i < v.length - 5; i++) {
                for (var j = i; j <= i + 4; j++) {
                    for (var k = j + 1; k <= i + 4; k++) {
                        if (v[j] + v[k] > v[i + 5]) {
                            var vv = [];
                            for (var kk = i; kk <= i + 4; kk++) {
                                if (kk != j && kk != k) {
                                    vv.push(v[kk]);
                                }
                            }
                            if (vv[0] + vv[1] > vv[2]) {
                                ok = 1;
                            }
                        }
                    }
                }
            }
            for (var i = 0; i < v.length - 2; i++) {
                if (v[i] + v[i + 1] > v[i + 2]) {
                    cnt++;
                    i += 2;
                }
            }
            if (ok || cnt > 1) {
                print("YES");
            } else {
                print("NO");
            }
        }
    }
}

solve();
