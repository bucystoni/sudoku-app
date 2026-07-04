package com.sudoku.backend.model;

public class Board {
    private final Cell[][] cells;

    public Board() {
        this.cells = getEmptyBoard();
    }

    public Board(Cell[][] cells) {
        this.cells = cells;
    }

    private Cell[][] getEmptyBoard() {
        Cell[][] board = new Cell[9][9];

        for (int i = 0; i < 9; i++) {
            board[i] = new Cell[9];

            for (int j = 0; j < 9; j++) {
                board[i][j] = new Cell(0);
            }
        }

        return board;
    }

    public Cell[][] getCells() {
        return cells;
    }
}
