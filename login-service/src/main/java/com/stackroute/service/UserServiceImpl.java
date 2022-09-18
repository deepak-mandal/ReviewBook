package com.stackroute.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.model.User;
import com.stackroute.repository.UserRepository;

@Service("UserService")
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    /*
     * abstract method for UserAuthenticateController
     * */
    /*
    Checking If login credientials is existing in our databases
     */
    public boolean validate(String username, String password) {

        if (userRepository.validate(username, password) != null) {
            return true;
        }
        else {
            return false;
        }

    }



    /*
     *  method Implmentation for UserController
     * */
    /*

    /*
    method to get all login credentials
    * */
    public List<User> list() {
        return (List<User>) userRepository.findAll();
    }


    /*
    method to get user by username
    * */
    public User get(String username) {
        return userRepository.findById(username).get();
    }


    /*
    method to add new login credentials;
    will be called once we received a message via RabbitMQ
    * */
    @Override
    public User saveUser(User user){
        return userRepository.save(user);
    }







}