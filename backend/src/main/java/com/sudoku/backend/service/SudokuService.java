package com.sudoku.backend.service;

import com.sudoku.backend.model.Board;
import com.sudoku.backend.util.PuzzleParser;
import org.springframework.stereotype.Service;

@Service
public class SudokuService {
    String testPuzzle = "301086504046521070500000001400800002080347900009050038004090200008734090007208103";

    public Board getEmptyBoard() {
        return new Board();
    }

    public Board getTestBoard() { return PuzzleParser.parseSudokuString(testPuzzle); }

}
