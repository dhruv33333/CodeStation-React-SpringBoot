package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.DTO.UserDTO;
import com.dhruv.CodeStation.model.User;
import com.dhruv.CodeStation.response.LoginResponse;
import com.dhruv.CodeStation.response.RegisterResponse;


public interface UserService {
    public RegisterResponse registerUser(UserDTO user);
    public LoginResponse loginUser(UserDTO user);
}
