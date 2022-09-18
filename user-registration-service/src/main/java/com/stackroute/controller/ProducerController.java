package com.stackroute.controller;

import com.stackroute.model.LoginUser;
import com.stackroute.service.RabbitMqSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

/**
 * RestController annotation is used to create Restful web services using Spring MVC
 */
@RestController

/**
 * RequestMapping annotation maps HTTP requests to handler methods
 */
@RequestMapping(value = "/api/vi/")
public class ProducerController {

    private RabbitMqSender rabbitMqSender;

    @Autowired
    public ProducerController(RabbitMqSender rabbitMqSender){
        this.rabbitMqSender=rabbitMqSender;
    }
    /*
     * Add code to autowire RabbitMQSender
     */

    /**
     * To get the property values
     */
    @Value("${app.message}")
    private String message;


    @PostMapping(value = "employee")
    public String publishEmployeeDetails(@RequestBody LoginUser employee) {

        rabbitMqSender.send(employee);
        /*
         * Add code to send employee object to RabbitMQ
         */

        return message;
    }

}
