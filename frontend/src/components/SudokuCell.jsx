import './SudokuCell.css'

function SudokuCell({ value, row, col, onClick }) {
    return (<div className="cell" onClick={() => onClick(row, col)}>
        {value !== 0 ? value : ""}
    </div>);
}

export default SudokuCell;