package com.dhruv.CodeStation.DTO;


public class UserDTO {

    private String name, pic, password, email, cPassword;

    public UserDTO(String name, String pic, String password, String cPassword, String email) {
        this.name = name;
        this.pic = pic;
        this.password = password;
        this.email = email;
        this.cPassword = cPassword;
    }

    public String getcPassword() {
        return cPassword;
    }

    public void setcPassword(String cPassword) {
        this.cPassword = cPassword;
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
