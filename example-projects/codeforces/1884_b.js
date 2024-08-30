// https://codeforces.com/contest/1884/problem/B

// const { readline, print} = require('@ip-algorithmics/codeforces-io');

"use strict";

const lines = parseInt(readline());

for (let line = 0; line < lines; line++) {
    const n = parseInt(readline());
    const s = readline();
    const ans = new Array(n).fill(-1);
    let k = 0;
    let tmp = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === "1") {
            tmp++;
        } else {
            ans[k] = tmp + (ans[k - 1] || 0);
            k += 1;
        }
    }

    print(ans.join(" "))
}

