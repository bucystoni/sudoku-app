package com.sudoku.backend.controller;

import com.sudoku.backend.model.Board;
import com.sudoku.backend.service.SudokuService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class SudokuController {

    private final SudokuService sudokuService;

    public SudokuController(SudokuService sudokuService) {
        this.sudokuService = sudokuService;
    }

    @GetMapping("/sudoku/new")
    public Board getNewBoard() {
        return sudokuService.getEmptyBoard();
    }

    @GetMapping("/sudoku/test")
    public Board getTestBoard() { return sudokuService.getTestBoard(); }
}