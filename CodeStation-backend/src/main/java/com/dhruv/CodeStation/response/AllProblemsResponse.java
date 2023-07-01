package com.dhruv.CodeStation.response;

public class AllProblemsResponse {
    private String status, message;
    private Problem[] problems;

    public AllProblemsResponse(String status, String message, Problem[] problems) {
        this.status = status;
        this.message = message;
        this.problems = problems;
    }

    public Problem[] getProblems() {
        return problems;
    }

    public void setProblems(Problem[] problems) {
        this.problems = problems;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
