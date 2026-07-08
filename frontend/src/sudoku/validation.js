function isValidMove(board, row, col, value) {


    return true;
}

export function getConflictingCells(board, row, col) {
    const conflicts = new Set();
    const value = board[row][col].value;

    if (value === 0) return [];

    // conflicts in row
    const currentRow = board[row];
    currentRow.forEach((cell, colIndex) => {
        if (cell.value === value && colIndex !== col) {
            conflicts.add(`${row},${colIndex}`);
        }
    });

    // conflicts in colummn
    const currentCol = board.map(row => row[col]);
    currentCol.forEach((cell, rowIndex) => {
        if (cell.value === value && rowIndex !== row) {
            conflicts.add(`${rowIndex},${col}`);
        }
    });

    // conflicts in box
    const boxStartRow = Math.floor(row / 3) * 3;
    const boxStartCol = Math.floor(col / 3) * 3;

    for (let r = boxStartRow; r < boxStartRow + 3; r++) {
        for (let c = boxStartCol; c < boxStartCol + 3; c++) {
            if (board[r][c].value === value) {
                if (r === row && c === col) continue;
                conflicts.add(`${r},${c}`);
            }
        }
    }

    return [...conflicts].map((conflict) => {
        const [row, col] = conflict.split(",").map(Number);

        return { row, col };
    })
}



export function isSolved(board) {
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            if (board[r][c].value === 0) return false;
            if (getConflictingCells(board, r, c).length > 0) return false;
        }
    }
    
    return true;
}