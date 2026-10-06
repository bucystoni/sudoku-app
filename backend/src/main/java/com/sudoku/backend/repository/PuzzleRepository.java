package com.sudoku.backend.repository;

import com.sudoku.backend.entity.PuzzleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PuzzleRepository extends JpaRepository<PuzzleEntity, Long> {
}
