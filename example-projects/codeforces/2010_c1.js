/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

function solution() {
    var s = readline();
    var n = s.length;
 
    for (var x = Math.floor(n / 2) + 1; x < n; ++x) {
        if (s.substr(0, x) === s.substr(n - x)) {
            print("YES");
            print(s.substr(0, x));
            return;
        }
    }
    print("NO");
}
 
var t = 1;
while (t--) {
    solution();
}
