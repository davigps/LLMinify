/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

function solve() {
    var input = readline().split(' ');
    var a1 = parseInt(input[0]);
    var a2 = parseInt(input[1]);
    var b1 = parseInt(input[2]);
    var b2 = parseInt(input[3]);

    var res = 0;
    if ((a1 > b1 && a2 >= b2) || (a1 >= b1 && a2 > b2)) res++;
    if ((a1 > b2 && a2 >= b1) || (a1 >= b2 && a2 > b1)) res++;
    if ((a2 > b1 && a1 >= b2) || (a2 >= b1 && a1 > b2)) res++;
    if ((a2 > b2 && a1 >= b1) || (a2 >= b2 && a1 > b1)) res++;

    print(res);
}

var test = parseInt(readline());
while (test--) {
    solve();
}
