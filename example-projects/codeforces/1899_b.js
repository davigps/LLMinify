/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

function getDivisors(n) {
    var divisors = [];
    for (var i = 1; i <= Math.sqrt(n); ++i) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) {
                divisors.push(n / i);
            }
        }
    }
    return divisors;
}

function process() {
    var n = parseInt(readline().trim());
    var v = readline().trim().split(' ').map(function(value) { return parseInt(value); });
    
    var p = [v[0]];
    for (var i = 1; i < n; ++i) {
        p[i] = p[i - 1] + v[i];
    }
    
    var divisors = getDivisors(n);
    var ans = 0;
    
    for (var i = 0; i < divisors.length; ++i) {
        var d = divisors[i];
        var mn = Number.MAX_VALUE;
        var mx = -Number.MAX_VALUE;
        for (var j = d - 1; j < n; j += d) {
            var tmp = p[j] - ((j - d >= 0) ? p[j - d] : 0);
            mn = Math.min(mn, tmp);
            mx = Math.max(mx, tmp);
        }
        ans = Math.max(ans, mx - mn);
    }
    
    print(ans);
}

var t = parseInt(readline().trim());
while (t--) {
    process();
}
