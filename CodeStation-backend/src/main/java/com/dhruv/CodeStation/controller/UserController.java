package com.dhruv.CodeStation.controller;

import com.dhruv.CodeStation.DTO.UserDTO;
import com.dhruv.CodeStation.response.LoginResponse;
import com.dhruv.CodeStation.response.RegisterResponse;
import com.dhruv.CodeStation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> register(@RequestBody UserDTO user) {

        if (user.getName() == null || user.getName().isEmpty()) {
            return ResponseEntity.status(400).body(new RegisterResponse("failure", "Please enter all credentials"));
        }
        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            return ResponseEntity.status(400).body(new RegisterResponse("failure", "Please enter all credentials"));
        }
        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            return ResponseEntity.status(400).body(new RegisterResponse("failure", "Please enter all credentials"));
        }

        RegisterResponse res = userService.registerUser(user);
        return ResponseEntity.status(200).body(res);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody UserDTO user) {

        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            return ResponseEntity.status(400).body(new LoginResponse("Please enter call credentials", "failure")) ;
        }
        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            return ResponseEntity.status(400).body(new LoginResponse("Please enter call credentials", "failure")) ;
        }

        LoginResponse res = userService.loginUser(user);
        return ResponseEntity.status(200).body(res);
    }
}
