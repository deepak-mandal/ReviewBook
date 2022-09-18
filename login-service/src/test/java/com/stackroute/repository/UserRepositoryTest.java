package com.stackroute.repository;


import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import com.stackroute.model.User;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;



@ExtendWith(SpringExtension.class)
@SpringBootTest
public class UserRepositoryTest {


    @Autowired
    private UserRepository userRepository;

    @Test
    public void givenUserShouldReturnUserObjectTest() {
        //fail("Not yet implemented");
        //User Input
        User m1=new User("abc@cc.com", "abcd", "user");
        //Data is saved into Database
        userRepository.save(m1);
        //Data is retrieved from database
        User m2 = userRepository.findById(m1.getUsername()).get();
        assertNotNull(m2);
        assertEquals(m1.getPassword(), m2.getPassword());

    }




}
