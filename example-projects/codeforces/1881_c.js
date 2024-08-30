"use strict";

function readNumber() { return parseInt(readline()); }

function readArray(cb) {
	if (cb === undefined) cb = x => parseInt(x);
	return readline().split(" ").map(cb);
}

function isSorted(arr) { return arr.every((v, i, a) => !i || a[i - 1] <= v) }

{
	let t = readNumber();
	while (t--) {
		solve();
	}
}

function solve() {
	const n = readNumber();
	const arr = [];

	for (let i = 0; i < n; ++i) {
		const tmpArr = readline().split("");
		arr.push(tmpArr);
	}

	let count = 0;
	for (let i = 0; i < n / 2; ++i) {
		for (let j = 0; j < n / 2; ++j) {
			const a = arr[i][j].charCodeAt(0);
			const b = arr[j][n - i - 1].charCodeAt(0);
			const c = arr[n - i - 1][n - j - 1].charCodeAt(0);
			const d = arr[n - j - 1][i].charCodeAt(0);

			const charCodeArr = [a, b, c, d].sort((a, b) => a - b);
			count += (charCodeArr[3] - charCodeArr[2]) + (charCodeArr[3] - charCodeArr[1]) + (charCodeArr[3] - charCodeArr[0]);
		}
	}

	print(count);
}