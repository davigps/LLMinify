"use strict";
function readNumber() {
	return parseInt(readline());
}
function readArray(r) {
	return r || (r = (r) => Number(r)), readline().split(" ").map(r);
}
function isSorted(r) {
	return r.every((r, e, t) => !e || t[e - 1] <= r);
}
{
	let r = readNumber();
	for (; r--; ) solve();
}
function solve() {
	const r = readNumber(),
		e = readArray().sort((r, e) => r - e);
	let t = 0,
		n = 0,
		i = 0;
	for (let o = 0; o < r; ++o)
		e[o] % 2 != 0 ? e[o] > i && (i = e[o]) : (++t, e[o] > n && (n = e[o]));
	if (!i || !n) return void print(0);
	for (let t = 0; t < r && !(e[t] > i); ++t)
		e[t] % 2 == 0 && e[t] < i && (i += e[t]);
	let o = t;
	i < n && ++o, print(o);
}
