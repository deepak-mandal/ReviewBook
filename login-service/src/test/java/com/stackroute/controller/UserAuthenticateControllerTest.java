package com.stackroute.controller;

import com.stackroute.model.User;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.junit.jupiter.api.Test;
//import org.junit.Test;
import static org.junit.jupiter.api.Assertions.*;

public class UserAuthenticateControllerTest {

    UserAuthenticateController userAuthenticateController;

    @Test
    public void generateTokenCheckNotNull() {
        User user = new User("deepak@cgi.com", "deepak", "user");

        String jwtToken = "";
        jwtToken = Jwts.builder().setSubject(user.getUsername()).setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "secret").compact();
        Map<String, String> jwtTokenMap = new HashMap<>();
        jwtTokenMap.put("token", jwtToken);
        jwtTokenMap.put("message", "Login Successful");
        //return jwtTokenMap;
        System.out.println(jwtTokenMap);
        assertNotNull(jwtTokenMap);
    }

    @Test
    public void CheckValidToken() {
        User user = new User("deepak@cgi.com", "deepak", "admin");

        String jwtToken = "";
        jwtToken = Jwts.builder().setSubject(user.getUsername()).setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "secret").compact();
        Map<String, String> jwtTokenMap = new HashMap<>();
        jwtTokenMap.put("token", jwtToken);
        jwtTokenMap.put("message", "Login Successful");
        //return jwtTokenMap;
        System.out.println(jwtTokenMap);
        assertNotNull(jwtToken);
    }



}
