package com.stackroute.controller;



import com.stackroute.exception.UserAlreadyExistsException;
import com.stackroute.model.User;
import com.stackroute.service.UserService;
import com.stackroute.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class UserController {


    private UserService userservice;
    UserServiceImpl rabbitMqSender;

    @Autowired
    public UserController(UserService userservice, UserServiceImpl rabbitMqSender) {
        super();
        this.userservice = userservice;
        this.rabbitMqSender = rabbitMqSender;
    }


    @PostMapping("/register")
    public ResponseEntity<User>saveUser(@RequestBody User user){
        try {
            User saveduser = userservice.save(user);
            return new ResponseEntity<>(saveduser, HttpStatus.CREATED);

        } catch (UserAlreadyExistsException e) {
            return new ResponseEntity("User already exists", HttpStatus.CONFLICT);
        }
    }


    @GetMapping({"/{username}"})
    public ResponseEntity<User> getUser(@PathVariable String username) {
        return new ResponseEntity<>(userservice.getUserById(username), HttpStatus.OK);
    }


    @PutMapping("/user/{username}")
    public ResponseEntity<User> updateUser(@PathVariable String username, @RequestBody User user) {
        return new ResponseEntity<>( userservice.updateUser(user), HttpStatus.OK);
    }



    @GetMapping("/users")
    public ResponseEntity<List<User>> listAllUsers() {
        return new ResponseEntity<List<User>>(userservice.list(), HttpStatus.OK);
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String id){
        userservice.deleteUserByusername(id);
        return ResponseEntity.noContent().build();
    }


    @Value("${app.message}")
    private String message;

    //@CrossOrigin
    @PostMapping("/user") //consumer service 2
    public String publishUser2(@RequestBody User user) {
        rabbitMqSender.sendUser(user);
        return "User added "+message;
    }

}
