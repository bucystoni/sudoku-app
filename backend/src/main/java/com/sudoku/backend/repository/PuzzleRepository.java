package com.sudoku.backend.repository;

import com.sudoku.backend.entity.PuzzleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface PuzzleRepository extends JpaRepository<PuzzleEntity, Long> {

    @Query(value = "SELECT * FROM puzzles ORDER BY random() LIMIT 1", nativeQuery = true)
    Optional<PuzzleEntity> findRandomPuzzle();

    @Query(value = """
            SELECT * FROM puzzles
            WHERE clue_number BETWEEN :min AND :max
            ORDER BY random() LIMIT 1""",
            nativeQuery = true)
    Optional<PuzzleEntity> findRandomPuzzleInRange(@Param("min") int min,
                                                   @Param("max") int max);

}
