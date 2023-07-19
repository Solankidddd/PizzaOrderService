package org.niit.UserAuthenticationService.repository;

import org.niit.UserAuthenticationService.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User, String> {
}
