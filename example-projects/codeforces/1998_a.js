/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

function solve() {
    var inputs = readline().split(' ');
    var x = parseInt(inputs[0], 10);
    var y = parseInt(inputs[1], 10);
    var k = parseInt(inputs[2], 10);

    if (k % 2 === 0) {
        for (var i = 0; i < k; i += 2) {
            print((x + i + 1) + " " + (y + i + 1));
            print((x - i - 1) + " " + (y - i - 1));
        }
    } else {
        print(x + " " + y);
        k--;
        for (var i = 0; i < k; i += 2) {
            print((x + i + 1) + " " + (y + i + 1));
            print((x - i - 1) + " " + (y - i - 1));
        }
    }
}

function main() {
    var t = parseInt(readline(), 10);
    while (t--) {
        solve();
    }
}

main();
