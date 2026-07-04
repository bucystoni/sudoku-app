package com.sudoku.backend.util;

import com.sudoku.backend.model.Board;
import com.sudoku.backend.model.Cell;

public class PuzzleParser {

    public static Board parseSudokuString(String puzzle) {
        int boardSize = (int) Math.sqrt(puzzle.length()); // should be 9
        Cell[][] cells = new Cell[boardSize][boardSize];

        String[] digits = puzzle.split("");
        int current = 0;

        for (int i = 0; i < cells.length; i++) {
            cells[i] = new Cell[boardSize];
            for (int j = 0; j < boardSize; j++) {
                int value = Integer.parseInt(digits[current]);
                current++;
                cells[i][j] = value == 0 ? new Cell() : new Cell(value, true);
            }
        }

        return new Board(cells);
    }

}
