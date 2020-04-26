//Event listeners Create Grid
let btnCreateGrid = document.querySelector('#btnCreateGrid')
btnCreateGrid.onclick = () => createGrid(askForUserInputX(), askForUserInputY())


let xAxis = 0
let yAxis = 0

// Function to ask for user input on grid size xAxis
function askForUserInputX(){
    let xAxis = window.prompt("What grid size do you want on the xAxis?").toLowerCase()
    return xAxis
}

// Function to ask for user input on grid size yAxis
function askForUserInputY(){
    let yAxis = window.prompt("What grid size do you want on the yAxis?").toLowerCase()
    return yAxis
}

// Function to create the grid
function createGrid(xAxis, yAxis){
        let sketchpad = document.querySelector('#container')
        let column = "repeat(auto-fill," + 960 / xAxis + "px)";
        sketchpad.setAttribute("style", "grid-template-columns:" + column) 
        console.log(sketchpad)
    for (i = 1; i <= xAxis * yAxis; i++) {
        let newDiv = document.createElement('div')
        newDiv.setAttribute('style', 'flex:1; outline: 1px solid white; background: blue'); 
        sketchpad.appendChild(newDiv)
    }
}

//Event listeners Clear Grid
let btnClearGrid = document.querySelector('#btnClearGrid')
btnClearGrid.onclick = () => clearGrid(xAxis, yAxis)

// Function to clear the grid
function clearGrid () {
        let sketchpad = document.querySelector('#container')        
        sketchpad.innerHTML = ''    
}