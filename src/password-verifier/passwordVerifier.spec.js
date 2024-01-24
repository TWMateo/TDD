import { PasswordVerifier } from './passwordVerifier';

describe('Password verifier', () => {
	const passwordVerifier = new PasswordVerifier();

	it('should throw error if the password does not have more than 8 characters', () => {
		const password = 'abcdefg';

		expect(() => {
			passwordVerifier.verify(password);
		}).toThrow('Password should have more than 8 characters');
	});

	it('should throw error if the password does not have more than 8 characters', () => {
		const password = null;

		expect(() => {
			passwordVerifier.verify(password);
		}).toThrow('Password should not be null');
	});

	it('should throw error if the password does not have at least one uppercase letter', () => {
		const password = 'abcdefghijk';

		expect(() => {
			passwordVerifier.verify(password);
		}).toThrow('Password should have at least one uppercase letter');
	});

	it('should throw error if the password does not have at least one lowercase letter', () => {
		const password = 'ABCDEFGHIJK';

		expect(() => {
			passwordVerifier.verify(password);
		}).toThrow('Password should have at least one lowercase letter');
	});

	it('should throw error if the password does not have at least one number', () => {
		const password = 'AbcDeFgHiJk';

		expect(() => {
			passwordVerifier.verify(password);
		}).toThrow('Password should have at least one number');
	});

	it('should return "Password is correct" if the password is correct', () => {
		const password = 'AbcDeFgHiJk1';

		expect(passwordVerifier.verify(password)).toEqual('Password is correct');
	});
});
