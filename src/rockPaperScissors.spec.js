import { game } from './rockPaperScissors';
import {
	rock,
	paper,
	scissors,
	playerOneWins,
	playerTwoWins,
	draw,
} from './rockPaperScissorsConstants';

describe('Rock Paper Scissors game', () => {
	it('should get "player one wins" if players select rock and scissors', () => {
		expect(game(rock, scissors)).toBe(playerOneWins);
	});

	it('should get "player two wins" if players select scissors and rock', () => {
		expect(game(scissors, rock)).toBe(playerTwoWins);
	});

	it('should get "player one wins" if players select scissors and paper', () => {
		expect(game(scissors, paper)).toBe(playerOneWins);
	});

	it('should get "player two wins" if players select Paper and Scissors', () => {
		expect(game(paper, scissors)).toBe(playerTwoWins);
	});

	it('should get "player one wins" if players select paper and rock', () => {
		expect(game(paper, rock)).toBe(playerOneWins);
	});

	it('should get "player two wins" if players select Rock and Paper', () => {
		expect(game(rock, paper)).toBe(playerTwoWins);
	});

	it('should get "Is a draw" if players select same', () => {
		expect(game(rock, rock)).toBe(draw);
	});
});
