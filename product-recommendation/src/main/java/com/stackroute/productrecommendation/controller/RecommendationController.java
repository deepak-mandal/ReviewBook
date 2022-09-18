package com.stackroute.productrecommendation.controller;

import com.stackroute.productrecommendation.model.IncomingData;
import com.stackroute.productrecommendation.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;

@RestController
public class RecommendationController {
    private RecommendationService recommendationService;

    @Autowired
    public RecommendationController(RecommendationService recommendationService) {
        this.recommendationService = recommendationService;
    }

    @PostMapping("/recommend")
    public ResponseEntity<?> getRecommendations(@RequestBody String username){
        HashSet<String> recommendations = this.recommendationService.getProductRecommendations(username);
        return new ResponseEntity<>(recommendations, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addIncomingData(@RequestBody IncomingData incomingData){
        this.recommendationService.addIncomingData(incomingData);
        return new ResponseEntity<>("Added data to neo4j successfully!", HttpStatus.OK);
    }

    @PostMapping("/delete/{productId}")
    public ResponseEntity<?> deleteProductNode(@PathVariable String productId){
        this.recommendationService.deleteProductNode(productId);
        return new ResponseEntity<>("Deleted product node!", HttpStatus.OK);
    }
}
