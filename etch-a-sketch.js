const gridContainer = document.querySelector('.grid-container');
let gridSize = 4;

function drawGrid(numSquares) {
    for (let row = 1; row <= numSquares; ++row){
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.id = `row${row}`;
        for (let col = 1; col <= numSquares; ++col){
            let newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.id = `square${row - 1 + col}`;
            newSquare.style.backgroundColor = '#ffffff'
            newRow.appendChild(newSquare);
        }
        gridContainer.appendChild(newRow);
    }

    document.querySelectorAll('.square').forEach(
        (square) => square.addEventListener('mouseover', colorSquare)
    );
}

function eraseGrid() {
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function colorSquare() {
    const DARKEN_FACTOR = Math.round(0.1 * 255);
    const currentColorString = this.style.backgroundColor;
    const currentColorLevel = Number.parseInt(currentColorString.substring(currentColorString.indexOf('(') + 1,currentColorString.indexOf(',')));
    const newColorLevel = currentColorLevel - DARKEN_FACTOR;
    const newColorString = newColorLevel < 0 ? 'rgb(0,0,0)' : `rgb(${newColorLevel},${newColorLevel},${newColorLevel})`;
    this.style.backgroundColor = newColorString;
}

function changeSize() {
    let newGridSize = window.prompt("How many squares per side?", gridSize.toString());
    if (!newGridSize) return;

    while (Number.isNaN(Number.parseInt(newGridSize)) || Number.parseInt(newGridSize) < 0 || Number.parseInt(newGridSize) > 100){
        if (Number.isNaN(Number.parseInt(newGridSize))) {
            newGridSize = window.prompt(`${newGridSize} is not a number. Please enter a number between 0 and 100.`, gridSize.toString());
        } else if (newGridSize < 0) {
            newGridSize = window.prompt(`Negative number is not valid. Number must be bewtween 0 and 100.`, gridSize.toString());
        } else {
            newGridSize = window.prompt(`Grid size cannot exceed 100. Number must be between 0 and 100`, gridSize.toString());
        }

        if (!newGridSize) return;
    }

    newGridSize = Number.parseInt(newGridSize);

    eraseGrid();
    drawGrid(newGridSize);
    gridSize = newGridSize;
    
}

document.querySelector('button').addEventListener('click', changeSize)
drawGrid(gridSize);