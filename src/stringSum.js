/**
Write a simple String Sum utility with a function string Sum(string num1, string num2),
which can accept only natural numbers and will return their sum.
Replace entered number with 0 (zero) if entered number is not a natural number.

Extra: accept more string numbers to get the addiction
 */
export const sum = (...numbers) => numbers.map(natural).reduce((acc, number) => acc + number, 0);

const natural = number => {
	number = +number;
	return number > 0 ? number : 0;
};
