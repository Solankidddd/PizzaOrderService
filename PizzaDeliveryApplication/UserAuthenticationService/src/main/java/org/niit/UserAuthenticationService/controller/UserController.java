package org.niit.UserAuthenticationService.controller;

import org.niit.UserAuthenticationService.domain.User;
import org.niit.UserAuthenticationService.exception.UserAlreadyExistsException;
import org.niit.UserAuthenticationService.exception.UserNotFoundException;
import org.niit.UserAuthenticationService.service.ISecurityTokenGenerator;
import org.niit.UserAuthenticationService.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/authservice")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
    IUserService userService;
    ISecurityTokenGenerator securityTokenGenerator;
    @Autowired
    public UserController(IUserService userService, ISecurityTokenGenerator securityTokenGenerator) {
        this.userService = userService;
        this.securityTokenGenerator = securityTokenGenerator;
    }

    //http://localhost:8081/api/authservice/register --- post
    @PostMapping("/register")
    public ResponseEntity<?> saveUser(@RequestBody User user) throws UserAlreadyExistsException {
        return new ResponseEntity<>(userService.addUser(user), HttpStatus.CREATED);
    }

    @GetMapping("/user")
    public ResponseEntity<?> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
    }

    //http://localhost:8081/api/authservice/user/sam@gmail.com
    @DeleteMapping("/user/{email}")
    public ResponseEntity<?> deleteUser(@PathVariable String email) throws UserNotFoundException {
        return new ResponseEntity<>(userService.deleteUser(email), HttpStatus.OK);
    }

    @PutMapping("/user")
    public ResponseEntity<?> updateUser(@RequestBody User user) {
        return new ResponseEntity<>(userService.updateUser(user), HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginCheck(@RequestBody User user) {
        User result = userService.loginCheck(user.getEmail(), user.getPassword());
        if(result!=null) {
            //valid user
            //generate token
            Map<String, String> map = securityTokenGenerator.tokenGenerator(result);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else {
            //invalid user or user does not exist
            return new ResponseEntity<>("invalid user or user does not exist", HttpStatus.NOT_FOUND);
        }
    }
}
