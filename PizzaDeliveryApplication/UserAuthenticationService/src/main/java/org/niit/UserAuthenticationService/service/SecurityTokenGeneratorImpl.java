package org.niit.UserAuthenticationService.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.niit.UserAuthenticationService.domain.User;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class SecurityTokenGeneratorImpl implements ISecurityTokenGenerator{

    @Override
    public Map<String, String> tokenGenerator(User user) {
        String jwtToken = null;
        jwtToken = Jwts.builder().setSubject(user.getFirstName()).setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "securityKey").compact();
        Map<String, String> map = new HashMap<>();
        map.put("token", jwtToken);
        map.put("message", "user logged in successfully");
        return map;
    }
}
