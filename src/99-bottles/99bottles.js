export class BottleSong {
	verse(number) {
		if (number > 2)
			return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${
				number - 1
			} bottles of beer on the wall.\n`;

		if (number === 2) {
			return `${number} bottles of beer on the wall, ${number} bottles of beer.\nTake one down and pass it around, ${
				number - 1
			} bottle of beer on the wall.\n`;
		}

		if (number === 1)
			return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';

		return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';
	}

	getRange(from, to) {
		let range = [];

		for (let i = from; i >= to; i--) range.push(i);

		return range;
	}

	sing(from, to) {
		return this.getRange(from, to)
			.map(number => this.verse(number))
			.join('\n');
	}
}
