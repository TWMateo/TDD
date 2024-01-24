export class PasswordVerifier {
	verify(password) {
		if (!password) throw new Error('Password should not be null');

		if (password.length <= 8) throw new Error('Password should have more than 8 characters');

		if (!/[A-Z]/.test(password))
			throw new Error('Password should have at least one uppercase letter');

		if (!/[a-z]/.test(password))
			throw new Error('Password should have at least one lowercase letter');

		if (!/[0-9]/.test(password)) throw new Error('Password should have at least one number');

		return 'Password is correct';
	}
}
