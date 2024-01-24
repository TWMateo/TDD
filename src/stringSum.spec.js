import { sum } from './stringSum';

describe('string sum', () => {
	it('should return zero if a number 1 and number number 2 are zero strings', () => {
		// Arrange
		const number1 = '0';
		const number2 = '0';
		const expectedResult = 0;

		// Act
		const result = sum(number1, number2);

		// Assert
		expect(result).toBe(expectedResult);
	});

	it('should return same number if one of numbers is zero', () => {
		// Arrange
		const number1 = '0';
		const number2 = '2';
		const expectedResult = 2;

		// Act
		const result = sum(number1, number2);

		// Assert
		expect(result).toBe(expectedResult);
	});

	it('should detect if a number is negative and turn into zero', () => {
		// Arrange
		const number1 = '-8';
		const number2 = '15';
		const expectedResult = 15;

		// Act
		const result = sum(number1, number2);

		// Assert
		expect(result).toBe(expectedResult);
	});

	it('should return sum of two numbers', () => {
		// Arrange
		const number1 = '8';
		const number2 = '15';
		const number3 = '02';
		const expectedResult = 25;

		// Act
		const result = sum(number1, number2, number3);

		// Assert
		expect(result).toBe(expectedResult);
	});
});
