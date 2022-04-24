const gridContainer = document.querySelector('.grid-container');

function drawGrid(numSquares) {
    for (let row = 1; row <= numSquares; ++row){
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.id = `row${row}`;
        for (let col = 1; col <= numSquares; ++col){
            let newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.id = `square${row - 1 + col}`;
            newRow.appendChild(newSquare);
        }
        gridContainer.appendChild(newRow);
    }

    document.querySelectorAll('.square').forEach(
        (square) => square.addEventListener('mouseover', colorSquare)
    );
}

function colorSquare() {
    this.classList.add('visited');
}

drawGrid(4);