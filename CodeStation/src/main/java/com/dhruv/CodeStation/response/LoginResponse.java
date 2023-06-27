package com.dhruv.CodeStation.response;

class Data {
    String name, email, token, pic;
    public Data(String name, String email, String pic, String token) {
        this.name = name;
        this.email = email;
        this.pic = pic;
        this.token = token;
    }
}

public class LoginResponse {

    private String message, status;
    private Data data;

    public LoginResponse(String name, String email, String pic, String token, String message, String status) {
        data = new Data(name, email, pic, token);
        this.message = message;
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LoginResponse(String message, String status) {
        this.message = message;
        this.status = status;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "message='" + message + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
