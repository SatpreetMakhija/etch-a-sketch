var mainContent = document.createElement("div")
mainContent.classList.add('grid-container')
// mainContent.style.height = "500px"
// mainContent.style.width = "50%"
mainContent.style.padding = "50px 200px 75px 200px"
// mainContent.textContent = "Inside main content"

var grid_size = 14
const createGrid = (grid_size) => {
    for (i = 0; i< grid_size*grid_size; i++){
        var grid_div = document.createElement("div")
        grid_div.classList.add('grid-box')
        grid_div.setAttribute("id", i)
        grid_div.addEventListener("mouseover", cheangeColor)
        grid_div.setAttribute("style", "background-color: yellow;")
        grid_div.style.height = "20px"
        grid_div.textContent = ' ';
        grid_div.style.border = "thin solid #000000"
        mainContent.appendChild(grid_div)
    }

    mainContent.style.setProperty('grid-template-columns' , 'repeat(' + grid_size + ', 1fr)');



    //add event listeners
// document.querySelectorAll('.grid-box').forEach(item => {
//     item.addEventListener('mouseover', event => {
//         item.setAttribute("style", "background-color: blue")
//     })
// })

}

const cheangeColor = (e) => {
    e.target.style.backgroundColor = "blue"
}


document.body.appendChild(mainContent)
createGrid(grid_size);

//add styling
mainContent.style.display = "grid";







function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


const resetGrid = () => {
    document.querySelectorAll('.grid-box').forEach(item => 
        item.setAttribute("style", "background-color: white")
        )
    grid_size = prompt("enter grid size");
    while (grid_size > 50) {
        grid_size = prompt("enter grid size")
    }
    if (grid_size < 51) {
        removeAllChildNodes(mainContent)
        createGrid(grid_size)
    } else {
        grid_size = prompt("enter grid size");
    }
   

}

