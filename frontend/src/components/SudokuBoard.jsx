import SudokuCell from "./SudokuCell";

function SudokuBoard({board, onCellChange}) {
    return (<div className="board">
        {board.map((row, i) => (
            <div key={i} className="row">
                {row.map((cell, j) => (
                    <SudokuCell 
                    key={`${i}-${j}`} 
                    cell={cell}
                    row={i}
                    col={j}
                    onChange={onCellChange}/>
                ))}
            </div>
        ))}
    </div>)
}

export default SudokuBoard;