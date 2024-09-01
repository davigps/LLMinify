'use strict'; // strict mode

/*
CF 1877C
n = 5
 1  2  3  4  5  6
[0, 1, 1, 1, 1, 6/11/16]
[0, 0, 2, 2, 2, 7/12/17]
[0, 0, 0, 3, 3, 8/13/18]
[0, 0, 0, 0, 4, 9/14/19]
[0, 0, 0, 0, 0, 1/2/3/4/5/10/15/20]
[0, 0, 0, 0, 0, 0]
k = 1, 2, 3
k = 1 means all 0 (1 way)
k = 2 means a[n + 1] < n or is a multiple of n (n - 1 + floor(m / n) ways)
k = 3 is the remaining ways (m - (k = 2) ways)
*/

const main = () => {

	let t = readInt();
	let allans = [];
	while (t--) {
		let z = readIntArr();
		let n = z[0], m = z[1], k = z[2];

		let k2;
		if (m >= n) {
			k2 = n - 1 + parseInt(m / n);
		} else {
			k2 = m;
		}
		let ans;
		if (k === 1) {
			ans = 1;
		} else if (k === 2) {
			ans = k2;
		} else if (k === 3) {
			ans = m - k2;
		} else {
			ans = 0;
		}
		allans.push(ans);
	}
	multiLineArrayPrint(allans);

	return;
}

const readInt = () => parseInt(readline());
const readString = () => readline();
const readIntArr = () => readline().split(" ").map(zzzz => parseInt(zzzz));
const parseLong = (string) => { // javascript's largest long is < (1<<62)
	var n = string.length;
	var res = 0;
	for (var i = 0; i < n; i++) {
		res *= 10;
		res += parseInt(string[i]);
	}
	return res;
}
const readLong = () => parseLong(readLong());
const readLongArr = () => readline().split(" ").map(zzzz => parseLong(zzzz));
const oneLineArrayPrint = (arr) => print(arr.map(zzzz => zzzz.toString()).join(' '));
const multiLineArrayPrint = (arr) => print(arr.map(zzzz => zzzz.toString()).join('\n'));
const multiLineArrayOfArraysPrint = (arr) => print(arr.map(yyyy => yyyy.map(zzzz => zzzz.toString()).join(' ')).join('\n'));
const makeArr = (defaultVal, dimensionsArr) => {
	var n = dimensionsArr.length;
	if (n === 1) return Array(dimensionsArr[0]).fill(defaultVal);
	else {
		var temp = [];
		for (var i = 0; i < dimensionsArr[0]; i++)
			temp.push(makeArr(defaultVal, dimensionsArr.slice(1)));
		return temp;
	}
}

for (let _ = 0; _ < 1; _++) {
	main();
}

// newline for testing
 //newline for testing
// codeforces js cannot destructure arrays
