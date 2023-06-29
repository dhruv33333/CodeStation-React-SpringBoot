package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.DTO.UserDTO;
import com.dhruv.CodeStation.model.User;
import com.dhruv.CodeStation.response.LoginResponse;


public interface UserService {
    public String registerUser(UserDTO user);
    public LoginResponse loginUser(UserDTO user);
}
