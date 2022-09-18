package com.stackroute.service;

import com.stackroute.exception.UserAlreadyExistsException;
import com.stackroute.model.User;

import java.util.List;

public interface UserService {
    User save(User user)throws UserAlreadyExistsException;
    User getUserById(String username);
    User updateUser(User user);
    void deleteUserByusername(String id);
    void sendUser(User user);
    List<User> list();

}
