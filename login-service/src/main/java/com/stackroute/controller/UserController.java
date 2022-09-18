package com.stackroute.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.stackroute.model.User;
import com.stackroute.service.UserService;

/*
* for storing User data to MySQL databases that received
* from UserRegistrationService via message bus/RabbitMQ
* */

@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;


    /*
    method to get all the existing login credentials
    * */
    @GetMapping
    public ResponseEntity<List<User>> listAllUsers() {
        return new ResponseEntity<List<User>>(userService.list(), HttpStatus.OK);
    }


    /*
    method to get login credentials details by username
    * */
    @GetMapping(value = "/{username}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> getUser(@PathVariable("username") String username) {

        User user = userService.get(username);
        if (user == null) {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }


    /*
    method to store new login credentials
    * */
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User saveduser = userService.saveUser(user);
        return new ResponseEntity<User>(saveduser, HttpStatus.CREATED);
    }




}