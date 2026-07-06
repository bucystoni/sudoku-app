import { useEffect, useState } from "react";
import SudokuCell from "./SudokuCell";

function SudokuBoard({ currentBoard }) {
    const [board, setBoard] = useState(currentBoard);
    const [selected, setSelected] = useState(null);


    function onCellClick(row, col) {
        console.log({ row, col });
        setSelected({ row, col });
    }

    function handleCellChange(row, col, value) {

        setBoard(prevBoard => {
            return prevBoard.map((r, i) => {
                return r.map((cell, j) => {

                    if (cell.fixed) return cell;

                    if (i === row && j === col) {
                        return {
                            ...cell,
                            value: value === "" ? 0 : Number(value)
                        };
                    };

                    return cell;

                })
            })
        })
    }

    useEffect(() => {
        function handleKeyDown(e) {
            if (!selected) return;

            console.log(e.key)

            const { row, col } = selected;

            if (e.key >= 1 && e.key <= 9) {
                handleCellChange(row, col, e.key);
            }

            if (e.key === "Backspace" || e.key === "Delete") {
                handleCellChange(row, col, "");
            }

        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selected])


    return (<div className="board">
        {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
                {row.map((cell, colIndex) => (
                    <SudokuCell
                        key={`${rowIndex}-${colIndex}`}
                        value={cell.value}
                        row={rowIndex}
                        col={colIndex}
                        onClick={onCellClick} />
                ))}
            </div>
        ))}
    </div>)
}

export default SudokuBoard;