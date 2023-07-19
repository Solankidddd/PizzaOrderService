package org.niit.PizzaService.service;

import org.niit.PizzaService.domain.Pizza;
import org.niit.PizzaService.domain.User;
import org.niit.PizzaService.exception.UserAlreadyExistsException;
import org.niit.PizzaService.exception.UserNotFoundException;

import java.util.List;

public interface IPizzaService {
    User registerUser(User user) throws UserAlreadyExistsException;
    User savePizzaToUserList(Pizza pizza, String email) throws UserNotFoundException;
    List<Pizza> getAllUserPizzas(String email) throws UserNotFoundException;
}
