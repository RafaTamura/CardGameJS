import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data.js"

function BoardGame(amountCards) {

const $htmlcardsList = cards.map((card) => CardFrontBack(card.icon , card.altIcon) );
const $htmlcard =  $htmlcardsList.join('');

  return /*html*/ `
    <section class="board-game">
      ${$htmlcard}
          </section>
  `;
}

export default BoardGame;