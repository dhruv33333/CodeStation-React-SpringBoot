package com.dhruv.CodeStation.DTO;


public class UserDTO {

    private String name, pic, password, email;

    public UserDTO(String name, String pic, String password, String email) {
        this.name = name;
        this.pic = pic;
        this.password = password;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "UserLoginDTO{" +
                "name='" + name + '\'' +
                ", pic='" + pic + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
