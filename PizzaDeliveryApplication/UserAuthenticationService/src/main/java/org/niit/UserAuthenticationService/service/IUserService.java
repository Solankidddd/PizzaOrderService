package org.niit.UserAuthenticationService.service;

import org.niit.UserAuthenticationService.domain.User;
import org.niit.UserAuthenticationService.exception.UserAlreadyExistsException;
import org.niit.UserAuthenticationService.exception.UserNotFoundException;

import java.util.List;

public interface IUserService {
    public User addUser(User user) throws UserAlreadyExistsException;
    public List<User> getAllUser();
    public String deleteUser(String email) throws UserNotFoundException;
    public User updateUser(User user);
    public User loginCheck(String email, String password);
}
