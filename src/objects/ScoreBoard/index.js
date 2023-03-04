import Player1 from "../../components/PlayerScore";
import Points from "../../components/Points";
import Versus from "../../components/Versus";
import Arrow from "../../components/Arrow";
import "./style.css"

function ScoreBoard(){
    return /*html*/`
    <header class="score-board">
    ${Arrow()}
    ${Player1("Player 1")}
    ${Points(2)}
    ${Versus()}
    ${Points(3)}
    ${Player1("Player 2")}
    </header>
    `

}
export default ScoreBoard;