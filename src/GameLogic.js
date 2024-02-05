export default class GameLogic {
    constructor(moves) {
        this._moves = moves;
        this._middleOfMoves = Math.floor(this._moves.length / 2)
    }

    getPCMoveIndex() {
        return Math.floor(Math.random() * (this._moves.length - 1));
    }

    calculateResult(userMoveIndex, PCMoveIndex) {
        let i = userMoveIndex;
        let count = 0;
        while (i !== PCMoveIndex) {
            count++;
            i === this._moves.length - 1 ? i = 0 : i++
        }

        return count === 0 ? 'Draw' : count <= this._middleOfMoves ? 'Win' : 'Loose'
    }
}
