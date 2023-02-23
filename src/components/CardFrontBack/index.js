import CardGame from "../CardGame";
function CardFrontBack(){
    return `
    <article>
    ${CardGame()}
    ${CardGame("Javascript" , "Logo do JavaScript")}
    </article>
    `
}

export default CardFrontBack;