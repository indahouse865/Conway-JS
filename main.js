//Conways game of life
// Rules

//Given a board the next board's cells will either be dead or alive based on the logic defined below
// 1. If a cell has no living neighbors or only one living neighbor it is dead on the next board
// 2. If a cell has more than 3 living neighbors it id dead on the next board
// 3. If a cell has 2 or 3 living neighbors it is alive in the next board
// 4. diagonals count as neighbors


function checkRight (board, cell) {
    let checkCell = +cell + 1;
    if (board.hasOwnProperty(checkCell)) {
        return board[checkCell] === true ? 1 : 0;
    }
}

function checkLeft (board, cell) {
    let checkCell = +cell - 1;
    if (board.hasOwnProperty(checkCell)) {
        return board[checkCell] === true ? 1 : 0; 
    }
}

function checkAbove (board, cell, width) {
    let checkCell = +cell - width;
    if (board.hasOwnProperty(checkCell)) {
        return board[checkCell] === true ? 1 : 0; 

    }
}

function checkBelow (board, cell, width) {
    let checkCell = +cell + width;
    if (board.hasOwnProperty(checkCell)) {
        return board[checkCell] === true ? 1 : 0;
    }
}

function checkUpLeft (board, cell, width) {
    let checkCell = +cell - width - 1;
    if (board.hasOwnProperty(checkCell)) {
        return board[checkCell] === true ? 1 : 0;
    }
}

function checkUpRight (board, cell, width) {
    let checkCell = +cell - width + 1;
    if (board.hasOwnProperty(checkCell)) {
        return board[checkCell] === true ? 1 : 0;
    }
}

function checkDownLeft (board, cell, width) {
    let checkCell = +cell + width - 1;
    if (board.hasOwnProperty(checkCell)) {
        return board[checkCell] === true ? 1 : 0;
    }
}

function checkDownRight (board, cell, width) {
    let checkCell = +cell + width + 1;
    if (board.hasOwnProperty(checkCell)) {
        return board[checkCell] === true ? 1 : 0;
    }
}

function run(board, width, height) {
    let nextBoard = {};

    for (let cell = 0; cell < width * height; cell++) {
        let counter = 0;
        let column = cell % width;
        let row = parseInt(cell / width);

        //logic for columns
        if (column === 0) {
            counter += (checkRight(board, cell) || 0);
        } else if (column === 1) {
            counter += (checkRight(board, cell) || 0);
            counter += (checkLeft(board, cell) || 0);
        } else {
            counter += (checkLeft(board, cell) || 0);
        }

        //logic for rows
        if (row === 0) {
            counter += (checkBelow(board, cell, width) || 0);
        } else if (row === (height - 1)) {
            counter += (checkAbove(board, cell, width) || 0);
        } else {
            counter += (checkBelow(board, cell, width) || 0);
            counter += (checkAbove(board, cell, width) || 0);
        }

        //logic for up left
        if (column > 0 && row > 0) {
            counter += (checkUpLeft(board, cell, width) || 0);
        } 
        //logic for up right
        if (column < (width - 1) && row > 0) {
            counter += (checkUpRight(board, cell, width) || 0);
        }
        //logic for down left
        if (column > 0 && row < (height - 1)) {
            counter += (checkDownLeft(board, cell, width) || 0);
        }
        //logic for down right
        if (column < (width - 1) && row < (height - 1)) {
            counter += (checkDownRight(board, cell, width) || 0);
        }
        if (counter >= 2 && counter <= 3) {
            nextBoard[cell] = true;
        } 
    }

    return nextBoard;
}


function init() {
    const width = 4;
    const height = 3;

    let board = {
        0: false,
        1: true,
        2: false,
        3: true,
        4: false,
        5: true,
        6: false,
        7: false,
        8: true,
        9: true,
        10: false,
        11: false
    }

    for (let j = 0; j < 5; j++) {
        board = run(board, width, height);
        console.log(`Board: ${j}`)
        console.log(board);
    }
}

init();