package com.dhruv.CodeStation.model;

import com.dhruv.CodeStation.DTO.ProblemDTO;
import jakarta.persistence.*;

@Entity
@Table(name = "problem")
public class Problem {
    @Id
    @Column(nullable = false, unique = true, length = 12)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String title, difficulty, acceptance, description, exampleIn, exampleOut;

    public Problem() {
    }

    public Problem(ProblemDTO problemDTO) {
        this.title = problemDTO.getTitle();
        this.difficulty = problemDTO.getDifficulty();
        this.acceptance = problemDTO.getAcceptance();
        this.description = problemDTO.getDescription();
        this.exampleIn = problemDTO.getExampleIn();
        this.exampleOut = problemDTO.getExampleOut();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getAcceptance() {
        return acceptance;
    }

    public void setAcceptance(String acceptance) {
        this.acceptance = acceptance;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getExampleIn() {
        return exampleIn;
    }

    public void setExampleIn(String exampleIn) {
        this.exampleIn = exampleIn;
    }

    public String getExampleOut() {
        return exampleOut;
    }

    public void setExampleOut(String exampleOut) {
        this.exampleOut = exampleOut;
    }
}
