package com.sudoku.backend.controller;

import com.sudoku.backend.dto.PuzzleDTO;
import com.sudoku.backend.model.Board;
import com.sudoku.backend.model.Difficulty;
import com.sudoku.backend.service.SudokuService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class SudokuController {

    private final SudokuService sudokuService;

    public SudokuController(SudokuService sudokuService) {
        this.sudokuService = sudokuService;
    }

    @GetMapping("/sudoku/random")
    public PuzzleDTO getRandomPuzzleByDifficulty(@RequestParam(defaultValue = "ANY") Difficulty difficulty) {
        return sudokuService.getRandomPuzzle(difficulty);
    }
}