// Board Constants
const BOARD_WIDTH = 20;
const BOARD_HEIGHT = 32;

// Game Variables
let running;
let speed;
let board;
let pixel;
let snakeOrientation;
let coinPosition;
let mouseStart;
// First Snake Part, so the main snake in game
let snake;

// Possible Snake Movements
const movements = {};
movements.N = ["N", "L", "N", "W"];
movements.L = ["N", "L", "S", "L"];
movements.S = ["S", "L", "S", "W"];
movements.W = ["N", "W", "S", "W"];
const steps = {};
steps.N = [0, -1];
steps.L = [1, 0];
steps.S = [0, 1];
steps.W = [-1, 0];

// SnakePart Class
class SnakePart {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.child = null;
	}

	grow() {
		if (this.child) this.child.grow();
		else {
			const child = new SnakePart(this.x, this.y);
			this.child = child;
		}
	}

	print() {
		board[this.y][this.x] = 1;
		if (this.child) {
			this.child.print();
		}
	}

	move(x, y) {
		if (this.child) this.child.move(this.x, this.y);
		this.x = x;
		this.y = y;
	}

	hasChild(x, y) {
		if (this.x === x && this.y === y) return true;
		if (this.child) return this.child.hasChild(x, y);
		return false;
	}
}

// Assign all initial values to the game variables
function resetVariables() {
	running = true;
	speed = 200;
	board = [];
	pixel = [10, 10];
	snakeOrientation = "S";
	setCoinPosition();
	snake = new SnakePart(10, 16);
}

function setCoinPosition() {
	coinPosition = {
		x: randomInt(0, 19),
		y: randomInt(0, 31),
	};
}

// Game Start
document.body.onload = () => {
	startUp();
	runGame();
};

function runGame() {
	const canvas = document.getElementById("board");
	const app = document.getElementById("app");
	if (app && canvas) {
		canvas.width = app.offsetWidth;
		canvas.height = app.offsetHeight;

		resetVariables();
		getParams(canvas);
		renderFrame(canvas);
	}
}

function renderFrame(canvas) {
	clearBoard();
	snake.print();
	board[coinPosition.y][coinPosition.x] = 2;
	drawBoard(canvas);

	const newX = snake.x + steps[snakeOrientation][0];
	const newY = snake.y + steps[snakeOrientation][1];
	if (newX >= 0 && newX < BOARD_WIDTH && newY >= 0 && newY < BOARD_HEIGHT) {
		if (board[newY][newX] === 2) {
			setCoinPosition();
			snake.grow();
		} else if (board[newY][newX] === 1) running = false;
		snake.move(newX, newY);
		snake.print();
	} else running = false;

	if (running) setTimeout(() => renderFrame(canvas), speed);
}

// Draw the current board in Canvas
function drawBoard(canvas) {
	const ctx = canvas.getContext("2d");
	if (ctx) {
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < BOARD_HEIGHT; i++) {
			for (let j = 0; j < BOARD_WIDTH; j++) {
				if (board[i][j] === 2) {
					ctx.fillStyle = "#f2b500";
					ctx.fillRect(j * pixel[0], i * pixel[1], pixel[0], pixel[1]);
				} else if (board[i][j] === 1) {
					ctx.fillStyle = "#169638";
					ctx.fillRect(j * pixel[0], i * pixel[1], pixel[0], pixel[1]);
				}
			}
		}
	}
}

// Setup all canvas events to control the game
function startUp() {
	const canvas = document.getElementById("board");

	canvas.addEventListener("mousedown", (e) => {
		e.preventDefault();

		const position = [e.offsetX, e.offsetY];
		mouseStart = position;
	});

	canvas.addEventListener("mouseup", (e) => {
		e.preventDefault();

		const position = [e.offsetX, e.offsetY];
		handleCommand(mouseStart[0], mouseStart[1], position[0], position[1]);
	});

	canvas.addEventListener("touchstart", (e) => {
		e.preventDefault();

		const position = [e.touches[0].pageX, e.touches[0].pageY];
		mouseStart = position;
	});

	canvas.addEventListener("touchend", (e) => {
		e.preventDefault();

		const position = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
		handleCommand(mouseStart[0], mouseStart[1], position[0], position[1]);
	});

	document.body.addEventListener("keydown", (e) => {
		const key = e.which || e.keyCode;

		let command = 0;
		if (key === 38 || key === 87) command = 0;
		else if (key === 39 || key === 68) command = 1;
		else if (key === 40 || key === 83) command = 2;
		else if (key === 37 || key === 65) command = 3;
		snakeOrientation = movements[snakeOrientation][command];
	});
}

// Handle all touch/mouse commands
function handleCommand(startX, startY, finalX, finalY) {
	const dx = finalX - startX;
	const dy = finalY - startY;

	let command;
	if (Math.abs(dx) > Math.abs(dy)) {
		if (dx > 0) command = 1;
		else command = 3;
	} else {
		if (dy > 0) command = 2;
		else command = 0;
	}

	snakeOrientation = movements[snakeOrientation][command];
}

function getParams(canvas) {
	pixel = [canvas.width / BOARD_WIDTH, canvas.height / BOARD_HEIGHT];
	clearBoard();
}

// Utils
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function clearBoard() {
	board = [];
	for (let i = 0; i < BOARD_HEIGHT; i++) {
		board.push([]);
		for (let j = 0; j < BOARD_WIDTH; j++) {
			board[i].push(0);
		}
	}
}
