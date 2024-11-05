function findMinIndex(arrayNumbers) {
	let minimumDigit = arrayNumbers[0];
	let minimumIndex = 0;
	for (let i = 0; i < arrayNumbers.length; i++) {
		if (arrayNumbers[i] <= minimumDigit) {
			minimumDigit = arrayNumbers[i];
			minimumIndex = i;
		}
	}
	return minimumIndex;
}

console.log(`Minimum index is: ${findMinIndex([1, 3, 4, 0, 2, 9, 5, 3, 7, 8])}`);
