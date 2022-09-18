package com.stackroute;


import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.EnableRabbit;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;


@Slf4j
@EnableDiscoveryClient  //for eureka server
@EnableRabbit           //for rabbitmq consumer
@SpringBootApplication
public class LoginServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(LoginServiceApplication.class, args);

        log.info("Working on LoginService with port no 8080..");

    }

}
