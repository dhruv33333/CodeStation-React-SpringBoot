package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.model.User;
import com.dhruv.CodeStation.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImplementation implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public String registerUser(User user) {

        User res = userRepository.findByEmail(user.getEmail());

        if(userRepository.findByEmail(user.getEmail()) != null) {
            return "User with same email already registered";
        }
         userRepository.save(user);
        return "User registered successfully";
    }
}
