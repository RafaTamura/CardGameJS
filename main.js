import BoardGame from "./src/objects/BoardGame/index.js";
import './src/components/styles/settings/colors.css';
import './src/components/styles/generic/reset.css';
import './src/components/styles/elements/base.css';
import ScoreBoard from "./src/objects/ScoreBoard/index.js";

const $root = document.querySelector("#root");


$root.insertAdjacentHTML("beforeend",
`
${ScoreBoard()}
${BoardGame(6)},

`


);
