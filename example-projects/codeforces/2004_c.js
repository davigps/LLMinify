/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

var t = parseInt(readline(), 10);

while (t--) {
    var nk = readline().split(' ').map(function(x) { return parseInt(x, 10); });
    var n = nk[0];
    var k = nk[1];
    var lst = readline().split(' ').map(function(x) { return parseInt(x, 10); });
    lst.sort(function(a, b) { return b - a; });

    var a = 0;
    var b = 0;

    for (var i = 0; i < n; i++) {
        if (i % 2 === 1) {
            var diff = Math.min(lst[i - 1] - lst[i], k);
            b += lst[i] + diff;
            k -= diff;
        } else {
            a += lst[i];
        }
    }

    print(a - b);
}
