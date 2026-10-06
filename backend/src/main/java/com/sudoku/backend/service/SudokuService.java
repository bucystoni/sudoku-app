package com.sudoku.backend.service;

import com.sudoku.backend.dto.PuzzleDTO;
import com.sudoku.backend.entity.PuzzleEntity;
import com.sudoku.backend.exceptions.PuzzleNotFoundException;
import com.sudoku.backend.model.Board;
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

    public PuzzleDTO getRandomPuzzle() {
        Optional<PuzzleEntity> optionalPuzzle = puzzleRepository.findRandomPuzzle();
        if (optionalPuzzle.isPresent()) {
            PuzzleEntity puzzle = optionalPuzzle.get();
            return new PuzzleDTO(puzzle.getId(), puzzle.getPuzzle(), puzzle.getClueNumber());
        } else {
            throw new PuzzleNotFoundException("Couldn't find random puzzle.");
        }
    }

}
