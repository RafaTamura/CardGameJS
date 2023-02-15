import Player1 from "./src/components/PlayerScore/index.js";
import BoardGame from "./src/objects/CardGame/index.js";
import CardGame from "./src/components/CardGame";
import './src/components/styles/settings/colors.css';
import './src/components/styles/generic/reset.css';
import './src/components/styles/elements/base.css';

const $root = document.querySelector("#root");
const $htmlPlayer = Player1();
const $htmlBoardGame = BoardGame(3);

$root.insertAdjacentHTML("beforeend", $htmlPlayer);
$root.insertAdjacentHTML("beforeend", $htmlBoardGame);
