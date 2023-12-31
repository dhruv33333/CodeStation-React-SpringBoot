package com.dhruv.CodeStation.DTO;

public class ProblemDTO {
    private String title, difficulty, acceptance, description, exampleIn, exampleOut;
    private int totalTestcases;
    private DriverCodeDTO driverCodeDTO;

    public ProblemDTO() {
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

    public int getTotalTestcases() {
        return totalTestcases;
    }

    public void setTotalTestcases(int totalTestcases) {
        this.totalTestcases = totalTestcases;
    }

    public DriverCodeDTO getDriverCode() {
        return driverCodeDTO;
    }

    public void setDriverCode(DriverCodeDTO driverCode) {
        this.driverCodeDTO = driverCode;
    }
}
