import "./style.css";
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data.js"

function BoardGame(amountCards) {
  const hideCards = ($cardsActive) => {
    $cardsActive.forEach((card)=> card.classList.remove('-active'))
  }

  const changePlayer = ($arrow) => {
    const currentPlayer = $arrow.getAttribute('data-currentplayer')
    $arrow.setAttribute('data-currentplayer' , currentPlayer == 1 ? 2 : 1);
  }

  window.boardgame={};
  window.boardgame.handleClick = () => {
    const $boardgame = document.querySelector('.board-game');
    const $arrow = document.querySelector('.arrow')
    const $cardsActive =  $boardgame.querySelectorAll('.card-front-back.-active')

    if ($cardsActive.length === 2){
      setTimeout(()=> {
        hideCards($cardsActive);
        changePlayer($arrow);
      }, 500);
    }
  }

const $htmlcardsList = cards.map((card) => CardFrontBack(card.icon , card.altIcon) );
const $htmlcard =  $htmlcardsList.join('');

  return /*html*/ `
    <section class="board-game" onClick="boardgame.handleClick()">
      ${$htmlcard}
          </section>
  `;
}

export default BoardGame;