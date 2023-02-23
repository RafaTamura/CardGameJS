import CardGame from "../CardGame";
import "./style.css";
function CardFrontBack(){
    return `
    <article class="card-front-back">
    <div class="front">
    ${CardGame()}
    </div>
    <div>
    ${CardGame("javascript" , "Logo do JavaScript")}
    </div>
    </article>
    `
}

export default CardFrontBack;