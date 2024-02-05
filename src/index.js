import HashGeneration from "./HashGeneration.js";
import Menu from "./Menu.js";

const moves = process.argv.slice(2);

if (moves.length < 3) {
  console.log("Sorry, you have to pass 3 arguments as minimum!");
  process.exit();
}

if (moves.length % 2 === 0) {
  console.log("Sorry, you have to pass odd number of arguments!");
  process.exit();
}

if (moves.length !== new Set(moves).size) {
  console.log("Sorry, you have to pass different args!");
  process.exit();
}

const menu = new Menu(moves);

menu.getAnswer();
