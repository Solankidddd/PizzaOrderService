package org.niit.PizzaService.controller;

import org.niit.PizzaService.domain.Pizza;
import org.niit.PizzaService.domain.User;
import org.niit.PizzaService.exception.UserAlreadyExistsException;
import org.niit.PizzaService.exception.UserNotFoundException;
import org.niit.PizzaService.service.IPizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pizzaservice")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PizzaController {

    private IPizzaService pizzaService;
    private ResponseEntity<?> responseEntity;

    @Autowired
    public PizzaController(IPizzaService pizzaService) {
        this.pizzaService = pizzaService;
    }

    @PostMapping("/user")
    public ResponseEntity<?> registerUser(@RequestBody User user) throws UserAlreadyExistsException {
        try {
            responseEntity =  new ResponseEntity<>(pizzaService.registerUser(user), HttpStatus.CREATED);
        }
        catch(UserAlreadyExistsException e)
        {
            throw new UserAlreadyExistsException();
        }
        return responseEntity;
    }

    //http://localhost:65001/api/movieservice/user/xyz@gmail.com/movie -- post -- movie
    @PostMapping("/user/{email}")
    public ResponseEntity<?> savePizzaToUserList(@RequestBody Pizza pizza, @PathVariable String email) throws UserNotFoundException {
        try {
            responseEntity = new ResponseEntity<>(pizzaService.savePizzaToUserList(pizza, email), HttpStatus.CREATED);
        }
        catch (UserNotFoundException e)
        {
            throw new UserNotFoundException();
        }
        return responseEntity;
    }

    @GetMapping("/user/{email}")
    public ResponseEntity<?> getAllUserPizzas(@PathVariable String mail) throws UserNotFoundException {
        try {
            responseEntity = new ResponseEntity<>(pizzaService.getAllUserPizzas(mail),HttpStatus.OK);
        }
        catch (UserNotFoundException e)
        {
            throw new UserNotFoundException();
        }
        return responseEntity;
    }
}
