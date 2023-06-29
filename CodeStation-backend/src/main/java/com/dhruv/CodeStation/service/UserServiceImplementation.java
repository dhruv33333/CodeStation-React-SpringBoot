package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.DTO.UserDTO;
import com.dhruv.CodeStation.model.User;
import com.dhruv.CodeStation.repository.UserRepository;
import com.dhruv.CodeStation.response.LoginResponse;
import com.dhruv.CodeStation.response.RegisterResponse;
import com.dhruv.CodeStation.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImplementation implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public RegisterResponse registerUser(UserDTO user) {

        User res = userRepository.findByEmail(user.getEmail());

        if(userRepository.findByEmail(user.getEmail()) != null) {
            return new RegisterResponse("failure", "User with same email already registered");
        }

        User newUser = new User(user.getEmail());
        newUser.setName(user.getName());
        if(user.getPic() != null && user.getPic().length() != 0) {
            newUser.setPic(user.getPic());
        }

        // encoding the password
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(newUser);
        return new RegisterResponse("ok", "User registered successfully");
    }

    public LoginResponse loginUser(UserDTO user) {
        User userExists = userRepository.findByEmail(user.getEmail());
        if(userExists == null) {
            return new LoginResponse("User does not exist!", "failure");
        }

        if(!passwordEncoder.matches(user.getPassword(), userExists.getPassword())) {
            return new LoginResponse("Incorrect password!", "failure");
        }

        Utils utils = new Utils();

        return new LoginResponse(userExists.getName(), userExists.getEmail(), userExists.getPic(), utils.generateToken(userExists.getEmail()), "success", "ok");
    }

}
