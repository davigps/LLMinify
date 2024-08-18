function solveNQueens(n) {
	const board = new Array(n).fill().map(() => new Array(n).fill("."));
	const solutions = [];

	function isSafe(row, col) {
		// Check this row on left side
		for (let i = 0; i < col; i++) {
			if (board[row][i] === "Q") return false;
		}

		// Check upper diagonal on left side
		for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
			if (board[i][j] === "Q") return false;
		}

		// Check lower diagonal on left side
		for (let i = row, j = col; j >= 0 && i < n; i++, j--) {
			if (board[i][j] === "Q") return false;
		}

		return true;
	}

	function backtrack(col) {
		if (col === n) {
			solutions.push(board.map((row) => row.join("")));
			return;
		}

		for (let i = 0; i < n; i++) {
			if (isSafe(i, col)) {
				board[i][col] = "Q";
				backtrack(col + 1);
				board[i][col] = ".";
			}
		}
	}

	backtrack(0);
	return solutions;
}

// Example usage
console.log(solveNQueens(4));
