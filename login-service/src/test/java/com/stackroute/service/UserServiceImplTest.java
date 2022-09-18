package com.stackroute.service;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;


import com.stackroute.model.User;
import com.stackroute.model.User;
import com.stackroute.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserServiceImpl userServiceImpl;

    @Test
    public void TestSaveUser() {

        User m1=new User("dkm@iitg..ac.in", "deepak", "deepak");
        when(userRepository.save(any())).thenReturn(m1);
        userServiceImpl.saveUser(m1);
        verify(userRepository,times(1)).save(any());

    }


    @Test
    public void ValidateTest() {

        User user=new User("testing@test.com", "testing", "testing");
        //System.out.println(user.toString());
        boolean result=userServiceImpl.validate(user.getUsername(), user.getPassword());
        assertNotEquals(true, result);
    }


    @Test
    public void TestGetAllUser() {

        User u1=new User("dkm@iitg..ac.in", "deepak", "user");
        userRepository.save(u1);
        User u2=new User("dkm@iitg..ac.in", "deepak", "admin");
        userRepository.save(u2);
        User u3=new User("dkm@iitg..ac.in", "deepak", "organiser");
        userRepository.save(u3);

        //List object is created to store the  Movie data
        List<User> uList=new ArrayList<>();
        uList.add(u1);
        uList.add(u2);
        uList.add(u3);


        when(userRepository.findAll()).thenReturn(uList);
        List<User> mList1=userServiceImpl.list();
        assertEquals(uList, mList1);
        verify(userRepository, times(1)).save(u1);
        verify(userRepository, times(1)).findAll();

    }





}
