//Event listeners Create Grid
let btnCreateGrid = document.querySelector('#btnCreateGrid')
btnCreateGrid.onclick = () => createGrid(askForUserInputX(), askForUserInputY())

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
        let column = "repeat(auto-fill," + 960 / xAxis   + "px)";
        sketchpad.setAttribute("style", "grid-template-columns:" + column) 
    for (i = 1; i <= xAxis * yAxis; i++) {
        let newDiv = document.createElement('div')
        newDiv.classList.add("gridSquare");
        newDiv.addEventListener("mouseover", event => {
            newDiv.setAttribute('style', 'outline: 1px solid white')
            newDiv.style.backgroundColor = getRandomColor()
            });
        newDiv.setAttribute('style', 'flex:1; outline: 1px solid white; background: blue'); 
        sketchpad.appendChild(newDiv)
    }
}

//Event listeners Clear Grid
let btnClearGrid = document.querySelector('#btnClearGrid')
btnClearGrid.onclick = () => clearGrid()

// Function to clear the grid
function clearGrid () {
        let sketchpad = document.querySelector('#container')        
        sketchpad.innerHTML = ''    
}

// create a random color for the square

function getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }   