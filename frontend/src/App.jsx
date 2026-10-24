import { useEffect, useState } from 'react'
import SudokuBoard from './components/SudokuBoard';
import { isSolved } from './engine/validation';
import './App.css'
import { parsePuzzle } from './engine/puzzleParser';

// fetches and parses a board based on difficulty
async function fetchBoardBasedOnDifficulty(difficulty) {
  const response = await fetch(`http://localhost:8080/api/sudoku/random?difficulty=${difficulty}`);

  if (response.ok) {
    const data = await response.json();
    return parsePuzzle(data.puzzle);
  } else {
    throw new Error;
  }
}

function App() {
  const [board, setBoard] = useState(null);
  const [selected, setSelected] = useState(null);
  const [difficulty, setDifficulty] = useState("EASY");
  const [newGameBtnLoading, setNewGameBtnLoading] = useState(false);

  const solved = board && isSolved(board);

  useEffect(() => {
    async function fetchAndSetBoard() {
      const board = await fetchBoardBasedOnDifficulty("ANY");
      setBoard(board);
    }
    fetchAndSetBoard();
  }, []);

  async function handleNewGame() {
    try {
      setNewGameBtnLoading(true);
      const board = await fetchBoardBasedOnDifficulty(difficulty);
      setSelected(null);
      setBoard(board);
    } finally {
      setNewGameBtnLoading(false);
    }
  }

  if (!board) return <div>Loading...</div>;

  return (<div onClick={() => setSelected(null)}>
    <h1>{solved ? "You solved it! Good job!" : "Welcome to Sudoku!"}</h1>

    {board && <SudokuBoard
      board={board}
      setBoard={setBoard}
      selected={selected}
      setSelected={setSelected} />}
      
    <div className='controls'>
      <select className='difficulty-select'
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)} aria-label="Difficulty">
        <option value="EASY">Easy</option>
        <option value="MEDIUM">Medium</option>
        <option value="HARD">Hard</option>
      </select>
      <button className="new-game-btn" disabled={newGameBtnLoading} onClick={handleNewGame}>New Game</button>
    </div>
  </div>)
}

export default App;
