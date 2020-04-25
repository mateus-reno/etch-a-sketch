//Event listeners Create Grid
let btnCreateGrid = document.querySelector('#btnCreateGrid')
btnCreateGrid.onclick = () => createGrid(askForUserInput(), askForUserInput())

//Event listeners Clear Grid
let btnClearGrid = document.querySelector('#btnClearGrid')
btnClearGrid.onclick = () => createGrid(askForUserInput(), askForUserInput())

// Function to ask for user input on grid size
function askForUserInput(){
    let gridSize = window.prompt("What grid size do you want?").toLowerCase()
    return gridSize
}

// Function to create the grid
function createGrid(xAxis, yAxis){
    for (i = 1; i <= xAxis * yAxis; i++) {
        let sketchpad = document.querySelector('#container')
        let column = xAxis + "fr";
        sketchpad.setAttribute("grid-template-columns", column) 
        let newDiv = document.createElement('div')
        newDiv.setAttribute('style', 'flex:1; margin: 1px; background: blue'); 
        sketchpad.appendChild(newDiv)
        console.log("test:" + i)
    }
}

// Function to clear the grid

function clearGrid () {

}