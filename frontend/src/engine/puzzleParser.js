export function parsePuzzle(puzzle) {
    const SIZE = 9;
    const board = [];

    for (let row = 0; row < SIZE; row++) {
        const cells = [];

        for (let col = 0; col < SIZE; col++) {
            const value = Number(puzzle[col + row * SIZE])
            cells.push({value, fixed: value !== 0 })
        }
        board.push(cells);
    }
    return board;
}