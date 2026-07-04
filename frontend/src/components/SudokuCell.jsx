function SudokuCell({cell}) {
    return <div className="cell">{cell.number !== 0 ? cell.number : ""}</div>;
}

export default SudokuCell;