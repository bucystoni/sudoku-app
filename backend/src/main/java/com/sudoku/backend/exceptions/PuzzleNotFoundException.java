package com.sudoku.backend.exceptions;

public class PuzzleNotFoundException extends RuntimeException {
    public PuzzleNotFoundException(String message) {
        super(message);
    }
}
