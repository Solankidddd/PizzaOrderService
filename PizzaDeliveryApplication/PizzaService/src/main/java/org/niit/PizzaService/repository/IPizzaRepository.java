package org.niit.PizzaService.repository;

import org.niit.PizzaService.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPizzaRepository extends MongoRepository<User, String> {
}
