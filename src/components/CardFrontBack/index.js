import CardGame from "../CardGame";
function CardFrontBack(){
    return `
    <article>
    ${CardGame()}
    ${CardGame()}
    </article>
    `
}

export default CardFrontBack;