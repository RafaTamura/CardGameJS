import "./style.css"

function Arrow(currentPlayer=1){
return `
<img class="arrow" data-currentPlayer="${currentPlayer}" src="/src/components/images/IconArrowDown.png" >
`

}

export default Arrow;