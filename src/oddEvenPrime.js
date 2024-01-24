/**
The OddEvenPrime Kata

Write a program that prints numbers within specified range lets say 1 to 100.
- If number is odd print 'Odd' instead of the number.
- If number is even print 'Even' instead of number.
- Print number as a string, if number is Prime.
 */

export const game = (start, end) => {
	let result = [];

	for (let num = start; num <= end; num++) {
		if (isPrime(num)) result.push(String(num));
		else if (num % 2 === 0) result.push('Even');
		else result.push('Odd');
	}

	return result;
};

const isPrime = num => {
	if (num < 2) return false;

	for (let i = 2; i < num; i++) if (num % i === 0) return false;

	return true;
};
