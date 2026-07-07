import './SudokuCell.css'

function SudokuCell({ value, isSelected, isHighlighted, row, col, onClick }) {
    return (<div
        className={[
            "cell",
            isSelected ? "selected" : "",
            isHighlighted ? "highlight" : ""
        ].join(" ")}
        onClick={() => onClick(row, col)}>
        {value !== 0 ? value : ""}
    </div>);
}

export default SudokuCell;