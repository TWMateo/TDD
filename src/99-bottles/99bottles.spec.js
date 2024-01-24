import { BottleSong } from './99bottles';

describe('99 bottles', () => {
	it('Should sing verse with arbitrary number (10)', () => {
		// Arrange
		const verseNumber = 10;
		const verse =
			'10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n';
		const bottleSong = new BottleSong();

		// Act
		const resultVerse = bottleSong.verse(verseNumber);
		// Assert
		expect(resultVerse).toEqual(verse);
	});

	it('Should sing verse with arbitrary number (2)', () => {
		// Arrange
		const verseNumber = 2;
		const verse =
			'2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
		const bottleSong = new BottleSong();

		// Act
		const resultVerse = bottleSong.verse(verseNumber);
		// Assert
		expect(resultVerse).toEqual(verse);
	});

	it('Should sing verse with arbitrary number (1)', () => {
		// Arrange
		const verseNumber = 1;
		const verse =
			'1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
		const bottleSong = new BottleSong();

		// Act
		const resultVerse = bottleSong.verse(verseNumber);
		// Assert
		expect(resultVerse).toEqual(verse);
	});

	it('Should sing verse with arbitrary number (0)', () => {
		// Arrange
		const verseNumber = 0;
		const verse =
			'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';
		const bottleSong = new BottleSong();

		// Act
		const resultVerse = bottleSong.verse(verseNumber);
		// Assert
		expect(resultVerse).toEqual(verse);
	});

	it('Should return a range of numbers in descending order', () => {
		// Arrange
		const from = 10;
		const to = 5;
		const range = [10, 9, 8, 7, 6, 5];
		const bottleSong = new BottleSong();

		// Act
		const resultRange = bottleSong.getRange(from, to);
		// Assert
		expect(resultRange).toEqual(range);
	});

	it('Should sing from 10 to 5', () => {
		const from = 10;
		const to = 5;

		const bottleSong = new BottleSong();

		const song = bottleSong.sing(from, to);

		const expectedSong = `10 bottles of beer on the wall, 10 bottles of beer.
Take one down and pass it around, 9 bottles of beer on the wall.

9 bottles of beer on the wall, 9 bottles of beer.
Take one down and pass it around, 8 bottles of beer on the wall.

8 bottles of beer on the wall, 8 bottles of beer.
Take one down and pass it around, 7 bottles of beer on the wall.

7 bottles of beer on the wall, 7 bottles of beer.
Take one down and pass it around, 6 bottles of beer on the wall.

6 bottles of beer on the wall, 6 bottles of beer.
Take one down and pass it around, 5 bottles of beer on the wall.

5 bottles of beer on the wall, 5 bottles of beer.
Take one down and pass it around, 4 bottles of beer on the wall.
`;

		expect(song).toEqual(expectedSong);
	});
});
