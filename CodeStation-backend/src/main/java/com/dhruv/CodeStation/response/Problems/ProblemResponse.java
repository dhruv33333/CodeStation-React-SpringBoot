package com.dhruv.CodeStation.response;

import com.dhruv.CodeStation.model.Problem;

public class ProblemResponse {
    private Problem data;
    private String status, message;

    public ProblemResponse(Problem data, String message, String status) {
        this.data = data;
        this.message = message;
        this.status = status;
    }

    public Problem getData() {
        return data;
    }

    public void setData(Problem data) {
        this.data = data;
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
