/**
Instructions
Your task in this kata is to implement a function that calculates the sum of the integers inside a string.

For example:
Input --> 'h3ll0w0rld1'
Output --> 4

Input --> 'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'
Output --> 3635
*/
const isDigit = char => /[0-9]/.test(char);
const isMinusSign = char => char === '-';
const isDecimalPoint = char => char === '.';

export const sumOfIntegersInString = input => {
	let sum = 0;
	let currentNumber = '';
	let isNegative = false;

	const addToSum = () => {
		const numberToAdd = parseFloat(currentNumber) * (isNegative ? -1 : 1);
		if (!isNaN(numberToAdd)) {
			sum += numberToAdd;
		}
		currentNumber = '';
		isNegative = false;
	};

	for (let i = 0; i < input.length; i++) {
		const char = input[i];

		if (isMinusSign(char) && currentNumber.length === 0) {
			// Si el signo menos es el primer carácter, indica que el número es negativo
			isNegative = true;
		} else if (isDigit(char) || isDecimalPoint(char)) {
			// Si el carácter es un dígito o un punto, agrégalo al número actual
			currentNumber += char;

			if (i === input.length - 1) {
				// Si es el último carácter, agrega el número actual al resultado
				addToSum();
			}
		} else {
			// Si el carácter no es un dígito ni un punto, agrega el número actual al resultado
			addToSum();
		}
	}

	return sum;
};
