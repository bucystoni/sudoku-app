import SudokuCell from "./SudokuCell";

function SudokuBoard({board}) {
    console.log(board);

    return (<div className="board">
        {board.cells.map((row, i) => (
            <div key={i} className="row">
                {row.map((cell, j) => (
                    <SudokuCell key={`${i}-${j}`} cell={cell}/>
                ))}
            </div>
        ))}
    </div>)
}

export default SudokuBoard;