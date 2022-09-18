package com.stackroute.reviewmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class ReviewManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReviewManagementApplication.class, args);


        System.out.println("Review microservice started");
    }

}
