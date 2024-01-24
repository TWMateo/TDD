import { game } from './oddEvenPrime';
import { expectResultFor1To100 } from './expectedValues';

describe('Odd Even Prime test suite', () => {
	it('should recognize if a range a numbers are odd or even', () => {
		const start = 8;
		const end = 10;
		const resp = game(start, end);

		const expected = ['Even', 'Odd', 'Even'];

		expect(resp).toEqual(expected);
	});

	it('should recognize if a range a numbers are prime', () => {
		const start = 2;
		const end = 3;
		const resp = game(start, end);

		const expected = ['2', '3'];

		expect(resp).toEqual(expected);
	});

	it('should recognize if numbers are odd, even or prime from 1 to 100', () => {
		const start = 1;
		const end = 100;
		const resp = game(start, end);

		expect(resp).toEqual(expectResultFor1To100);
	});
});
