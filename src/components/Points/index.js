import "./style.css"

function Points(points = 0){
    return /*html*/ `
    <ol data-points="${points}">
        <li class="points-mark">
        </li>
        <li class="points-mark2">
        </li>
        <li class="points-mark3">
        </li>
    
    </ol>
    `

}

export default Points;