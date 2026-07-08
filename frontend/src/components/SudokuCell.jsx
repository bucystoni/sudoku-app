import './SudokuCell.css'

function SudokuCell({ value, isSelected, isHighlighted, conflicts, row, col, onClick }) {
    const isConflict = conflicts.some(conflict => {
        return conflict.row === row && conflict.col === col;
    })
    console.log(isConflict);
    
    return (<div
        className={[
            "cell",
            isSelected ? "selected" : "",
            isHighlighted ? "highlight" : "",
            isConflict ? "conflict" : ""
        ].join(" ")}
        onClick={() => onClick(row, col)}>
        {value !== 0 ? value : ""}
    </div>);
}

export default SudokuCell;