import { sumOfIntegersInString } from './sumIntegersInString';

describe('Sum Integers in String code kata', () => {
	//test('should works', () => {
	// const value = '1';
	// const resp = sumOfIntegersInString(value);
	//  expect(resp).toEqual(value);
	//  });

	it('should return 0 for an empty string', () => {
		expect(sumOfIntegersInString('')).toBe(0);
	});

	it('should return the sum of integers in the string', () => {
		expect(sumOfIntegersInString('h3ll0w0rld1')).toBe(4);
		expect(sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog')).toBe(
			3635
		);
	});

	it('should handle negative integers', () => {
		expect(sumOfIntegersInString('The quick brown -10 fox jumps over 20 lazy dogs.')).toBe(10);
	});

	it('should handle decimals', () => {
		expect(sumOfIntegersInString('The price is $19.99.')).toBe(19.99);
	});

	it('should handle negative decimals', () => {
		expect(sumOfIntegersInString('He had -1.99 in debt')).toBe(-1.99);
	});
});
