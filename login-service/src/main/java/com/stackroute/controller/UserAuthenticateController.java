package com.stackroute.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.stackroute.model.User;
import com.stackroute.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@CrossOrigin("*")		//cross origin permission, when data is transported from one port to another
@RestController
public class UserAuthenticateController {

    static final long EXPIRATIONTIME = 300000;
    Map<String, String> map = new HashMap<>();





    @Autowired
    private UserService userService;


    /*
    method for testing purpose
     */
    @GetMapping("/")
    public String serverStarted() {
        return "JWT Authentication server has started";
    }


    /*
    Generating JWT Token If Login Credentials is already existing in our databases
     */
    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody User user) throws ServletException {

        String jwtToken = "";

        try {
            jwtToken = getToken(user.getUsername(), user.getPassword());
            map.clear();
            map.put("message", "user successfully logged in");
            map.put("token", jwtToken);
            map.put("Username: ", user.getUsername());
            //map.put("Role: ", user.getRole());
        }
        catch (Exception e) {
            String exceptionMessage = e.getMessage();
            map.clear();
            map.put("token", null);
            map.put("message", exceptionMessage);
            return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>(map, HttpStatus.OK);
    }



    /*
    Method to generate JWT Token
     */
    public String getToken(String username, String password) throws Exception {

        if (username == null || password == null) {
            throw new ServletException("Please fill in username and password");
        }

        boolean flag = userService.validate(username, password);
        if (!flag) {
            throw new ServletException("Invalid credentials.");
        }

        //Generating JWT Token
        String jwtToken = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
                .signWith(SignatureAlgorithm.HS256, "secretkey").compact();

        return jwtToken;
    }




}
