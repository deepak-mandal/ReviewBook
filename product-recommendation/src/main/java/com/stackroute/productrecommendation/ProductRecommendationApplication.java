package com.stackroute.productrecommendation;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.PropertySource;

@EnableDiscoveryClient  //for eureka server
@Slf4j
@SpringBootApplication
public class ProductRecommendationApplication {
    public static void main(String[] args) {
        ConfigurableApplicationContext ctx = SpringApplication.run(ProductRecommendationApplication.class, args);
        log.debug("Started product-recommendation service at port {}", ctx.getEnvironment().getProperty("server.port"));


        System.out.println("Recommendation started");

    }

}
