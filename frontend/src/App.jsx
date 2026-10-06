import { useEffect, useState } from 'react'
import SudokuBoard from './components/SudokuBoard';
import { isSolved } from './engine/validation';
import './App.css'
import { parsePuzzle } from './engine/puzzleParser';

function App() {
  const [board, setBoard] = useState(null);
  const [selected, setSelected] = useState(null);

  const solved = board && isSolved(board);

  useEffect(() => {
    async function fetchRandomBoard() {
      const response = await fetch("http://localhost:8080/api/sudoku/random");
      const data = await response.json();
      setBoard(parsePuzzle(data.puzzle));
    }
    fetchRandomBoard();
  }, []);

  if (!board) return <div>Loading...</div>;

  return (<div onClick={() => setSelected(null)}>
    <h1>{solved ? "You solved it! Good job!" : "Welcome to Sudoku!"}</h1>
    {board && <SudokuBoard
      board={board}
      setBoard={setBoard}
      selected={selected}
      setSelected={setSelected} />}
  </div>)
}



export default App;
