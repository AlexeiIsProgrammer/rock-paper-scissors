import Help from "./Help.js";

import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import GameLogic from "./GameLogic.js";
import HashGeneration from "./HashGeneration.js";
import { getHashes } from "node:crypto";

export default class Menu {
  constructor(moves) {
    this._gameLogic = new GameLogic(moves)
    this._help = new Help(this._gameLogic);
    this._moves = moves;
    this._rl = readline.createInterface({ input, output })

    this._PCMove = this._gameLogic.getPCMoveIndex()
    this._hashGeneration = new HashGeneration(this._moves[this._PCMove]);
  }

  showMenu() {
    console.log("Avaliable moves:");
    for (let i = 0; i < this._moves.length; i++) console.log(`${i + 1} - ${this._moves[i]}`);
    console.log("0 - Exit");
    console.log("? - Help");
  }

  getAnswer() {
    this.showMenu();

    this._rl.question("Your choose: ", (userAnswer) => {
      switch (userAnswer) {
        case "0":
          process.exit(0);
        case "?":
          this._help.draw(this._moves);
          this.getAnswer();
          break;
        default:
          const answer = userAnswer - 1

          if (answer >= 0 && answer < this._moves.length) {
            console.log(`Your move: ${this._moves[answer]}\nComputer move: ${this._moves[this._PCMove]}`);

            const result = this._gameLogic.calculateResult(answer, this._PCMove)

            console.log(result === 'Win' ? 'You win!' : result === 'Draw' ? 'It\'s draw.' : 'You loose :(');

            console.log('HMAC Key: ', this._hashGeneration.key);

            process.exit(0)
          } else {
            this.getAnswer();
          }
      }

    });
  }
}
