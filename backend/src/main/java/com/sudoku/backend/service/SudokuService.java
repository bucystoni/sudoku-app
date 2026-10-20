package com.sudoku.backend.service;

import com.sudoku.backend.dto.PuzzleDTO;
import com.sudoku.backend.entity.PuzzleEntity;
import com.sudoku.backend.exceptions.PuzzleNotFoundException;
import com.sudoku.backend.model.Board;
import com.sudoku.backend.model.Difficulty;
import com.sudoku.backend.repository.PuzzleRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SudokuService {
    final PuzzleRepository puzzleRepository;

    public SudokuService(PuzzleRepository puzzleRepository) {
        this.puzzleRepository = puzzleRepository;
    }

    public Board getEmptyBoard() {
        return new Board();
    }

    public PuzzleDTO getRandomPuzzle(Difficulty difficulty) {
        return puzzleRepository.findRandomPuzzleInRange(difficulty.min(), difficulty.max())
                .map(puzzle -> new PuzzleDTO(puzzle.getId(), puzzle.getPuzzle(), puzzle.getClueNumber()))
                .orElseThrow(() -> new PuzzleNotFoundException("Couldn't find random puzzle."));
    }
}
