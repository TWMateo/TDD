/**
Rules:
- Rock Beats Scissors
- Scissors Beats Paper
- Paper Beats Rock
- Same Moves Result in Draw

Return:
- PLayer one wins
- PLayer two wins
- Is a draw
*/
import {
	rock,
	paper,
	scissors,
	playerOneWins,
	playerTwoWins,
	draw,
} from './rockPaperScissorsConstants';

export const game = (playerOneMove, playerTwoMove) => {
	if (playerOneMove === playerTwoMove) return draw;

	if (
		(playerOneMove === rock && playerTwoMove === scissors) ||
		(playerOneMove === paper && playerTwoMove === rock) ||
		(playerOneMove === scissors && playerTwoMove === paper)
	)
		return playerOneWins;

	if (
		(playerOneMove === scissors && playerTwoMove === rock) ||
		(playerOneMove === paper && playerTwoMove === scissors) ||
		(playerOneMove === rock && playerTwoMove === paper)
	)
		return playerTwoWins;
};
