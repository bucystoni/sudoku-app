package com.sudoku.backend.model;

public class Cell {
    private int value;
    private boolean isFixed;

    public Cell() {
        this.value = 0;
        this.isFixed = false;
    }

    public Cell(int value) {
        this.value = value;
        this.isFixed = false;
    }

    public Cell(int value, boolean isFixed) {
        this.value = value;
        this.isFixed = isFixed;
    }

    public int getValue() {
        return value;
    }

    public boolean isFixed() {
        return isFixed;
    }
}
