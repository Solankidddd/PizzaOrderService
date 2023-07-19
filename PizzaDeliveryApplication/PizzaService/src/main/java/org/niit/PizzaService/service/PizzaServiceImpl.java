package org.niit.PizzaService.service;

import org.niit.PizzaService.domain.Pizza;
import org.niit.PizzaService.domain.User;
import org.niit.PizzaService.exception.UserAlreadyExistsException;
import org.niit.PizzaService.exception.UserNotFoundException;
import org.niit.PizzaService.repository.IPizzaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PizzaServiceImpl implements IPizzaService {

    private IPizzaRepository pizzaRepository;

    @Autowired
    public PizzaServiceImpl(IPizzaRepository pizzaRepository) {
        this.pizzaRepository = pizzaRepository;
    }

    @Override
    public User registerUser(User user) throws UserAlreadyExistsException {
        if(pizzaRepository.findById(user.getEmail()).isPresent())
        {
            throw new UserAlreadyExistsException();
        }

        return pizzaRepository.save(user);
    }

    @Override
    public User savePizzaToUserList(Pizza pizza, String email) throws UserNotFoundException {
        //  check user is present or not
        if(pizzaRepository.findById(email).isEmpty()){
            throw new UserNotFoundException();
        }
        // user present
        User result=pizzaRepository.findById(email).get();
        if(result.getPizza()!=null) {
            result.getPizza().add(pizza);
        }else{
            result.setPizza(new ArrayList<>());
            result.getPizza().add(pizza);
        }
        pizzaRepository.save(result);
        return result;
    }

    @Override
    public List<Pizza> getAllUserPizzas(String email) throws UserNotFoundException {
        //check user is exist or not

        if(pizzaRepository.findById(email).isEmpty()){
            throw new UserNotFoundException();
        }
        //if not exist
        List<Pizza> allPizzas=pizzaRepository.findById(email).get().getPizza();
        return allPizzas;
    }

}
