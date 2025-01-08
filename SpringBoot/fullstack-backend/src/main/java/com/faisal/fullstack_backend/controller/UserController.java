package com.faisal.fullstack_backend.controller;

import com.faisal.fullstack_backend.model.User;
import com.faisal.fullstack_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.faisal.fullstack_backend.exception.UserNotFoundException;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5174/")
public class UserController {
//    Inject the User Repository Interface
    @Autowired
    private UserRepository userRepository;

//    For posting the data
    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/getusers")
    List<User> getAllUser() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUser(@PathVariable long id) {
        return userRepository.findById(id).
                orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@PathVariable long id, @RequestBody User newUser) {
        return userRepository.findById(id)
                .map(user->{
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                })
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable long id) {
        if(!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + " deleted";
    }

}
