package com.sudoku.backend.seed;

import com.sudoku.backend.entity.PuzzleEntity;
import com.sudoku.backend.repository.PuzzleRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@Component
public class PuzzleSeeder implements ApplicationRunner {

    private final PuzzleRepository repository;

    public PuzzleSeeder(PuzzleRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        if (repository.count() > 0) return;
        List<PuzzleEntity> puzzleEntities = new ArrayList<>();

        InputStream in = getClass().getResourceAsStream("/puzzles.csv"); // bytes
        if (in == null) {
            throw new IllegalStateException("Seed file /puzzles.csv not found on classpath");
        }

        try (InputStreamReader characters = new InputStreamReader(in, StandardCharsets.UTF_8); // characters
             BufferedReader reader = new BufferedReader(characters)) { // lines

            reader.readLine(); // skip header

            String line;
            while ((line = reader.readLine()) != null) {
                if (line.isBlank()) continue;
                String[] parts = line.split(",");
                puzzleEntities.add(new PuzzleEntity(parts[0], parts[1], Integer.parseInt(parts[2])));
            }
        }

        repository.saveAll(puzzleEntities);
    }
}
