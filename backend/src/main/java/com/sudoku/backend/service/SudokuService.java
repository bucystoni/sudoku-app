package com.sudoku.backend.service;

import com.sudoku.backend.model.Board;
import com.sudoku.backend.util.PuzzleParser;
import org.springframework.stereotype.Service;

@Service
public class SudokuService {
    String testPuzzle = "070000043040009610800634900094052000358460020000800530080070091902100005007040802";

    public Board getEmptyBoard() {
        return new Board();
    }

    public Board getTestBoard() { return PuzzleParser.parseSudokuString(testPuzzle); }

}
