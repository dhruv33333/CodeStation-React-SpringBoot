package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.DTO.UserDTO;
import com.dhruv.CodeStation.model.User;
import com.dhruv.CodeStation.repository.UserRepository;
import com.dhruv.CodeStation.response.Users.LoginResponse;
import com.dhruv.CodeStation.response.Users.RegisterResponse;
import com.dhruv.CodeStation.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private Utils utils = new Utils();

    @Override
    public RegisterResponse registerUser(UserDTO user) {

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

        try {
            userRepository.save(newUser);
        } catch (Exception e){
            return new RegisterResponse("failure", "Unable to connect to DB");
        }

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

        return new LoginResponse(userExists.getName(), userExists.getEmail(), userExists.getPic(), utils.generateToken(userExists.getEmail()), "success", "ok");
    }

    public String convertToAdmin(int userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        if(!userOptional.isPresent()) {
            return "User does not exist!";
        }

        User user = userOptional.get();
        user.setAdmin(true);
        try {
            userRepository.save(user);
        } catch (Exception e){
            return "Unable to connect to DB";
        }
        userRepository.save(user);

        return "User successfully converted to Admin!";
    }

}
