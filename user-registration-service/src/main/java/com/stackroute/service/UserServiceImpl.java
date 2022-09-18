package com.stackroute.service;

import com.stackroute.exception.UserAlreadyExistsException;
import com.stackroute.model.User;
import com.stackroute.repository.UserRepository;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    private RabbitTemplate rabbitTemplate;
    private UserRepository userrepository;

    @Autowired
    public UserServiceImpl(UserRepository userrepository, RabbitTemplate rabbitTemplate) {
        super();
        this.userrepository = userrepository;
        this.rabbitTemplate = rabbitTemplate;
    }

    @Value("${spring.rabbitmq.exchange}")  //exchange 1
    private String exchange;
    @Value("${spring.rabbitmq.routingkey}")  //routing Key 1
    private String routingkey;


    @Override
    public User save(User user) throws UserAlreadyExistsException {
        if (userrepository.findByEmailId(user.getEmailId()) != null) {
            throw new UserAlreadyExistsException();
        } else {
            return userrepository.save(user);
        }
    }

    @Override
    public User getUserById(String username) {
        return userrepository.findById(username).get();
    }

    @Override
    public User updateUser(User user) {
        User u = userrepository.findById(user.getUsername()).get();
        u.setPassword(user.getPassword());
        u.setEmailId(user.getEmailId());
        u.setRole(user.getRole());
        u.setOrganisationName(user.getOrganisationName());
        u.setGstIN(user.getGstIN());
        u.setLocation(user.getLocation());
        return  userrepository.save(u);
    }


    @Override
    public List<User> list() {
        return (List<User>) userrepository.findAll();
    }

    @Override
    public void deleteUserByusername(String id){
        userrepository.deleteById(id);

    }

    @Override
    public void sendUser(User user) {
        rabbitTemplate.convertAndSend(exchange, routingkey, user);
    }


}






