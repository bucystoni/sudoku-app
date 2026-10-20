package com.sudoku.backend.model;

public enum Difficulty {
    ANY(25, 45),
    EASY(39, 45),
    MEDIUM(32, 38),
    HARD(25, 31);

    private final int minClue;
    private final int maxClue;

    Difficulty(int minClue, int maxClue) {
        this.minClue = minClue;
        this.maxClue = maxClue;
    }

    public int min() {
        return minClue;
    }

    public int max() {
        return maxClue;
    }
}
