package com.sudoku.backend.service;

import com.sudoku.backend.model.Board;
import com.sudoku.backend.model.Cell;
import org.springframework.stereotype.Service;

@Service
public class SudokuService {

    public Board getEmptyBoard() {
        return new Board();
    }

}
