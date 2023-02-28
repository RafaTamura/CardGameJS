import Player1 from "../../components/PlayerScore";
import Points from "../../components/Points";
import Versus from "../../components/Versus";
import "./style.css"

function ScoreBoard(){
    return /*html*/`
    <header class="score-board">
    ${Player1("Player 1")}
    ${Points()}
    ${Versus()}
    ${Points()}
    ${Player1("Player 2")}
    </header>
    `

}
export default ScoreBoard;