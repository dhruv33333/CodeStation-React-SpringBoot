package com.dhruv.CodeStation.controller;

import com.dhruv.CodeStation.model.User;
import com.dhruv.CodeStation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

class LoginResponse {
    String name, email, pic, token;
}

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String register(@RequestBody User user) {

        if (user.getName() == null || user.getName().isEmpty()) {
            return "Please enter all credentials";
        }
        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            return "Please enter all credentials";
        }
        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            return "Please enter all credentials";
        }

        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody User user) {

        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            return null;
        }
        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            return null;
        }
    }
}
