/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

function f() {
    var str = readline();
    
    if (str.substr(0, 2) === "10") {
        if (str[2] !== '0' && str.length > 3) {
            print("yes");
        } else {
            print(str[2] >= '2' ? "yes" : "no");
        }
    } else {
        print("no");
    }
}

function main() {
    var n = parseInt(readline(), 10);
    for (var i = 0; i < n; i++) {
        f();
    }
}

main();
