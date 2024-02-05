import AsciiTable from 'ascii-table'

export default class Help {
    constructor(gameLogic) {
        this._gameLogic = gameLogic
    }
    draw(moves) {
        const table = new AsciiTable("Help table");
        table.setHeading("↓ PC \ User →", ...moves);

        for (let i = 0; i < moves.length; i++) {
            table.addRow(moves[i], ...moves.map((_, ind) => this._gameLogic.calculateResult(i, ind)))
        }

        console.log(table.toString());
    }
}
