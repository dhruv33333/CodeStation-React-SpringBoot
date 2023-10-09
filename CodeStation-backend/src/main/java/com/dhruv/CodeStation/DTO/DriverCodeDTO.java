package com.dhruv.CodeStation.DTO;


public class DriverCodeDTO {

    private String java, cpp;

    public DriverCodeDTO(String java18, String cpp) {
        this.java = java18;
        this.cpp = cpp;
    }

    public String getJava() {
        return java;
    }

    public void setJava(String java) {
        this.java = java;
    }

    public String getCpp() {
        return cpp;
    }

    public void setCpp(String cpp) {
        this.cpp = cpp;
    }
}
