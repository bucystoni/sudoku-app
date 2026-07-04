import { useEffect, useState } from 'react'
import SudokuBoard from './components/SudokuBoard';
import './App.css'

function App() {
  const [msg, setMsg] = useState("Welcome to Sudoku!");
  const [board, setBoard] = useState(null);


  useEffect(() => {
    async function fetchEmptyBoard() {
      const response = await fetch("http://localhost:8080/api/sudoku/new");
      const data = await response.json();
      setBoard(data);
    }
    fetchEmptyBoard();
  }, []);

  if (!board) return <div>Loading...</div>;

  return (<div>
    <h1>{msg}</h1>
    {board && <SudokuBoard board={board} />}
  </div>)
}



export default App;
