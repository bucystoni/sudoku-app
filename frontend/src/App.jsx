import { useEffect, useState } from 'react'
import SudokuBoard from './components/SudokuBoard';
import { isSolved } from './sudoku/validation';
import './App.css'

function App() {
  const [msg, setMsg] = useState("Welcome to Sudoku!");
  const [board, setBoard] = useState(null);
  const [selected, setSelected] = useState(null);

  const solved = board && isSolved(board);

  useEffect(() => {
    async function fetchTestBoard() {
      const response = await fetch("http://localhost:8080/api/sudoku/test");
      const data = await response.json();
      setBoard(data.cells);
    }
    fetchTestBoard();
  }, []);

  if (!board) return <div>Loading...</div>;

  return (<div onClick={() => setSelected(null)}>
    <h1>{msg}</h1>
    {board && <SudokuBoard
      board={board}
      setBoard={setBoard}
      selected={selected}
      setSelected={setSelected} />}
    {solved && <h2>You solved it!</h2>}
  </div>)
}



export default App;
