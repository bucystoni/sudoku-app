import { useEffect, useState } from 'react'
import SudokuBoard from './components/SudokuBoard';
import './App.css'

function App() {
  const [msg, setMsg] = useState("Welcome to Sudoku!");
  const [currentBoard, setCurrentBoard] = useState(null);

  useEffect(() => {
    async function fetchTestBoard() {
      const response = await fetch("http://localhost:8080/api/sudoku/test");
      const data = await response.json();
      setCurrentBoard(data.cells);
    }
    fetchTestBoard();
  }, []);

  if (!currentBoard) return <div>Loading...</div>;

  return (<div>
    <h1>{msg}</h1>
    {currentBoard && <SudokuBoard currentBoard={currentBoard} />}
  </div>)
}



export default App;
