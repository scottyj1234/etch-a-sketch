const gridContainer = document.querySelector('.grid-container');

for (let row = 1; row <= 4; ++row){
    let newRow = document.createElement('div');
    newRow.classList.add('row');
    newRow.id = `row${row}`;
    for (let col = 1; col <= 4; ++col){
        let newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.id = `square${row - 1 + col}`;
        newRow.appendChild(newSquare);
    }
    gridContainer.appendChild(newRow);
}

function colorSquare() {
    this.classList.add('visited');
}

document.querySelectorAll('.square').forEach(
    (square) => square.addEventListener('mouseover', colorSquare)
);