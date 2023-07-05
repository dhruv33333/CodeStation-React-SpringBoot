package com.dhruv.CodeStation.response;

import com.dhruv.CodeStation.model.Problem;

import java.util.List;

public class AllProblemsResponse {
    private String status, message;
    private List<Problem> problems;

    public AllProblemsResponse(String status, String message, List<Problem> problems) {
        this.status = status;
        this.message = message;
        this.problems = problems;
    }

    public List<Problem> getProblems() {
        return problems;
    }

    public void setProblems(List<Problem> problems) {
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
