/* ----------------------------------------------- */
/*  Template by Bharadwaj ( The Authentic JS CodeBuff )  */
/* ------------------------------------------------ */
/*    Youtube: https://youtube.com/@code-with-Bharadwaj   */
/*    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ */
/* ----------------------------------------------- */

function solve() {
    var testCases = parseInt(readline());
    while (testCases--) {
        var position = readline();
        var file = position[0];
        var rank = parseInt(position[1]);
        
        for (var currentFile = 'a'; currentFile <= 'h'; currentFile = String.fromCharCode(currentFile.charCodeAt(0) + 1)) {
            if (currentFile !== file) {
                print(currentFile + position[1]);
            }
        }
        
        for (var currentRank = 1; currentRank <= 8; currentRank++) {
            if (currentRank !== rank) {
                print(position[0] + currentRank);
            }
        }
    }
}

solve();
