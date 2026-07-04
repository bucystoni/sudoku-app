package com.sudoku.backend.model;

public class Cell {
    private int number;
    private boolean isFixed;

    public Cell(int number) {
        this.number = number;
        this.isFixed = false;
    }

    public Cell(int number, boolean isFixed) {
        this.number = number;
        this.isFixed = isFixed;
    }

    public int getNumber() {
        return number;
    }

    public boolean isFixed() {
        return isFixed;
    }
}
