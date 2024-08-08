// Initialize memoization array with known values
const fibMemo = [0, 1];

function fibonacciMemo(n) {
	// If we've already calculated this Fibonacci number, return it
	if (fibMemo[n] !== undefined) {
		return fibMemo[n];
	}

	// Calculate and store new Fibonacci numbers
	for (let i = fibMemo.length; i <= n; i++) {
		fibMemo[i] = fibMemo[i - 1] + fibMemo[i - 2];
	}

	return fibMemo[n];
}

function printFibonacci(n) {
	fibonacciMemo(n); // Ensure we've calculated up to n
	console.log(`The first ${n} Fibonacci numbers are:`);
	for (let i = 0; i < n; i++) {
		console.log(fibMemo[i]);
	}
}

// Example usage
printFibonacci(10);

console.log("\nCalculating the 20th Fibonacci number:");
console.log(fibonacciMemo(20));

console.log("\nCalculating the 30th Fibonacci number:");
console.log(fibonacciMemo(30));

console.log("\nRecalculating the 20th Fibonacci number (should be instant):");
console.log(fibonacciMemo(20));
