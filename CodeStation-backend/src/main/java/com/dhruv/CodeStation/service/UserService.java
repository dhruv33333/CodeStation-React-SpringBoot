package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.DTO.UserDTO;
import com.dhruv.CodeStation.response.Users.LoginResponse;
import com.dhruv.CodeStation.response.Users.RegisterResponse;


public interface UserService {
    public RegisterResponse registerUser(UserDTO user);
    public LoginResponse loginUser(UserDTO user);

    public String convertToAdmin(int userId);
}
