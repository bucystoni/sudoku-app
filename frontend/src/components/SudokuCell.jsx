import './SudokuCell.css'

function SudokuCell({ value, isFixed, isSelected, isHighlighted, conflicts, row, col, onClick }) {
    const isConflict = conflicts.some(conflict => {
        return conflict.row === row && conflict.col === col;
    })
    
    return (<div
        className={[
            "cell",
            isFixed ? "fixed" : "",
            isSelected ? "selected" : "",
            isHighlighted ? "highlight" : "",
            isConflict ? "conflict" : ""
        ].join(" ")}
        onClick={() => onClick(row, col)}>
        {value !== 0 ? value : ""}
    </div>);
}

export default SudokuCell;