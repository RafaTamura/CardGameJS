import "./style.css"

function Points(points = 0){
    return /*html*/ `
    <ol class="score">
        <li class="pointer-a${points}">
        </li>
        <li class="pointer-b${points}">
        </li>
        <li class="pointer-c${points}">
        </li>
    
    </ol>
    `

}

export default Points;