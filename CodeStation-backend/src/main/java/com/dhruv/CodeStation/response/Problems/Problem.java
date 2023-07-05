package com.dhruv.CodeStation.response;

public class Problem {
    private int problemId;
    private String title, difficulty, acceptance, description, exampleIn, exampleOut;

    public Problem(int problemId, String title, String difficulty, String acceptance, String description, String exampleIn, String exampleOut) {
        this.problemId = problemId;
        this.title = title;
        this.difficulty = difficulty;
        this.acceptance = acceptance;
        this.description = description;
        this.exampleIn = exampleIn;
        this.exampleOut = exampleOut;
    }

    public int getProblemId() {
        return problemId;
    }

    public void setProblemId(int problemId) {
        this.problemId = problemId;
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
