package com.sudoku.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "puzzles")
public class PuzzleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(length = 81, nullable = false, unique = true)
    private String puzzle;

    @Column(length = 81, nullable = false)
    private String solution;

    @Column
    private int clueNumber;

    protected PuzzleEntity() {
    }

    public PuzzleEntity(String puzzle, String solution, int clueNumber) {
        this.puzzle = puzzle;
        this.solution = solution;
        this.clueNumber = clueNumber;
    }

    public Long getId() {
        return id;
    }

    public String getPuzzle() {
        return puzzle;
    }

    public String getSolution() {
        return solution;
    }

    public int getClueNumber() {
        return clueNumber;
    }
}
