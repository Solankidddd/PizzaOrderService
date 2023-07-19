package org.niit.UserAuthenticationService.service;

import org.niit.UserAuthenticationService.domain.User;
import org.niit.UserAuthenticationService.exception.UserAlreadyExistsException;
import org.niit.UserAuthenticationService.exception.UserNotFoundException;
import org.niit.UserAuthenticationService.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService{
    @Autowired
    IUserRepository userRepository;

    @Override
    public User addUser(User user) throws UserAlreadyExistsException {
        if(userRepository.findById(user.getEmail()).isPresent()) {
            throw new UserAlreadyExistsException();
        }
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public String deleteUser(String email) throws UserNotFoundException {
        if(userRepository.findById(email).isEmpty()) {
            throw new UserNotFoundException();
        }
        userRepository.deleteById(email);
        return "user deleted successfully";
    }

    @Override
    public User updateUser(User user) {
        //1. check user is present
        if(userRepository.findById(user.getEmail()).isEmpty()) {
            return null;
        }
        //2. fetch record
        User tempUser = userRepository.findById(user.getEmail()).get();
        //3. update record ----> setter
        tempUser.setFirstName(user.getFirstName());
        tempUser.setLastName(user.getLastName());
        tempUser.setPassword(user.getPassword());
        //4. store record by using save(user) and return
        return userRepository.save(tempUser);
    }

    @Override
    public User loginCheck(String email, String password) {
        //check user is present or not
        if(userRepository.findById(email).isPresent()) {
            //fetch user object by using email
            User user = userRepository.findById(email).get();
            //check password
            if(user.getPassword().equals(password)) {
                //valid user
                return user;
            }
            else {
                //invalid user
                return null;
            }
        }
        else {
            //if user does not exist
            return null;
        }
    }
}
