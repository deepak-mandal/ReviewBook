package com.stackroute.service;


import java.util.List;

import com.stackroute.model.User;


public interface UserService {

    /*
     * abstract method for UserAuthenticateController
     * */
    public boolean validate(String username, String password);



    /*
     * abstract method for UserController
     * for login credentials management MySQL in databases
     * */

    public List<User> list();
    public User get(String email);
    public User saveUser(User user);

}

