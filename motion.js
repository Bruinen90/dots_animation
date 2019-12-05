const dotsWrapper = document.querySelector('.dots');

const dotsArr = [];

const generateArr = (width, height) => {
	for (let row = 1; row <= height; row++) {
		for (let col = 1; col <= width; col++) {
			dotsArr.push({ row: row, col: col });
		}
	}
};

generateArr(9, 11);

const dotsOutput = dotsArr.map(dot => {
	if (
		// Top triangles
		(dot.row < 5 &&
			(dot.row >= dot.col || (dot.col > 5 && dot.col + dot.row >= 10))) ||
		// Middle section
		(dot.row < 7 && dot.row > 4) ||
		// Bottom triangles
		(dot.row > 4 && (dot.row - dot.col < 6 && dot.row + dot.col < 16))
	) {
		return `<div class="dots__dot dots__dot--stable"></div>`;
	} else {
		return `<div class="dots__dot" style="animation-delay: ${1 -
			Math.abs(dot.row - 5) * 0.1}s; animation-name: ${
			dot.row > 5 ? 'moveDown' : 'moveUp'
		}"></div>`;
	}
});

dotsWrapper.innerHTML = dotsOutput.join('');
