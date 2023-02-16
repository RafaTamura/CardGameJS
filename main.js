import Player1 from "./src/components/PlayerScore/index.js";
import BoardGame from "./src/objects/BoardGame/index.js";
import CardGame from "./src/components/CardGame";
import './src/components/styles/settings/colors.css';
import './src/components/styles/generic/reset.css';
import './src/components/styles/elements/base.css';

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame();
const $htmlPlayer = Player1();

$root.insertAdjacentHTML("beforeend",
`
${Player1("Player 1")}
${Player1("Player 2")}
${BoardGame(6)},

`


);
