package com.stackroute.eurekaserver;

import lombok.extern.slf4j.Slf4j;

import java.math.BigDecimal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@Slf4j
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaServerApplication.class, args);

		log.info("Eureka Server is running on port no: 8761 ...");
        System.out.println("Eureka started");
    
        
	}

}
