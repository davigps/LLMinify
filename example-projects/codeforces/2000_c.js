/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

function solve() {
    var n = parseInt(readline(), 10);
    var a = readline().split(' ').map(Number);
    
    var mp = {};
    for (var i = 0; i < n; i++) {
        var x;
        if (a[i] in mp) {
            x = mp[a[i]];
        } else {
            x = -1;
        }
        mp[a[i]] = i;
        a[i] = x;
    }
    
    var m = parseInt(readline(), 10);
    for (var j = 0; j < m; j++) {
        var s = readline();
        if (s.length !== n) {
            print("NO");
            continue;
        }
        var f = Array(26).fill(-1);
        var b = Array(n);
        var fl = 1;
        
        for (var k = 0; k < n; k++) {
            b[k] = f[s.charCodeAt(k) - 'a'.charCodeAt(0)];
            f[s.charCodeAt(k) - 'a'.charCodeAt(0)] = k;
        }
        print(a.join('') === b.join('') ? "YES" : "NO");
    }
}

function main() {
    var t = parseInt(readline(), 10);
    while (t--) {
        solve();
    }
}

main();
