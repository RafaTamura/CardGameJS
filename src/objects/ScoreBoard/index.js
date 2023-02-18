import Player1 from "../../components/PlayerScore";
import "./style.css"

function ScoreBoard(){
    return /*html*/`
    <header class="score-board">
    ${Player1("Player 1")}
    ${Player1("Player 2")}
    </header>
    `

}
export default ScoreBoard;