package com.dhruv.CodeStation.response.Users;

class Data {

     int id;
     String name, email, token, pic;

     boolean isAdmin;

    public Data(String name, String email, String pic, String token, int id, boolean isAdmin) {
        this.name = name;
        this.email = email;
        this.pic = pic;
        this.token = token;
        this.id = id;
        this.isAdmin = isAdmin;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }
}

public class LoginResponse {

    private String message, status;
    Data data;


    public LoginResponse(int id, String name, String email, String pic, String token, boolean isAdmin, String message, String status) {
        data = new Data(name,email,pic,token, id, isAdmin);
        this.message=message;
        this.status = status;
    }

    public LoginResponse( String message, String status) {
        this.message=message;
        this.status = status;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "message='" + message + '\'' +
                ", status='" + status + '\'' +
                ", name='" + data.name + '\'' +
                ", email='" + data.email + '\'' +
                ", token='" + data.token + '\'' +
                ", pic='" + data.pic + '\'' +
                '}';
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

    public Data getData() {
        return data;
    }

    public void setData(Data data) {
        this.data = data;
    }
}
