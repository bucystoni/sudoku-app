function SudokuCell({cell, row, col, onChange}) {
    return (<div className="cell">
        <input 
            value={cell.value || ""} 
            disabled={cell.isFixed}
            onChange={(event) => onChange(row, col, event.target.value)}
        />
        </div>);
}

export default SudokuCell;