import { game } from './fizzBuzz';

describe('fizz buzz game', () => {
	it('should return number as a string', () => {
		expect(game(2)).toBe('2');
		expect(game(4)).toBe('4');
	});

	it('should return "Fizz"  if number is divisible by 3', () => {
		expect(game(3)).toBe('Fizz');
		expect(game(6)).toBe('Fizz');
	});

	it('should return "Buzz"  if number is divisible by 3', () => {
		expect(game(5)).toBe('Buzz');
		expect(game(10)).toBe('Buzz');
	});

	it('should return "FizzBuzz"  if number is divisible by 3 and 5', () => {
		expect(game(15)).toBe('FizzBuzz');
		expect(game(30)).toBe('FizzBuzz');
	});
});
