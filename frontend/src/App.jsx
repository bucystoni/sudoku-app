import { useEffect, useState } from 'react'
import SudokuBoard from './components/SudokuBoard';
import './App.css'

function App() {
  const [msg, setMsg] = useState("Welcome to Sudoku!");
  const [board, setBoard] = useState(null);

  function handleCellChange(row, col, value) {
    setBoard(prevBoard => {
      return prevBoard.map((r, i) => {
        return r.map((cell, j) => {
          if (cell.isFixed) return cell;

          if (i === row && j === col) {
            return {
              ...cell,
              value: value === "" ? 0 : Number(value)
            };
          }

          return cell;

        })
      })
    })

  }

  useEffect(() => {
    async function fetchEmptyBoard() {
      const response = await fetch("http://localhost:8080/api/sudoku/test");
      const data = await response.json();
      setBoard(data.cells);
    }
    fetchEmptyBoard();
  }, []);

  if (!board) return <div>Loading...</div>;

  return (<div>
    <h1>{msg}</h1>
    {board && <SudokuBoard board={board} onCellChange={handleCellChange} />}
  </div>)
}



export default App;
