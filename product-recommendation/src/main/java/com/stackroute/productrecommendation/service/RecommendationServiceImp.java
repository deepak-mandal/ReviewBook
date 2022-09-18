package com.stackroute.productrecommendation.service;

import com.stackroute.productrecommendation.model.IncomingData;
import com.stackroute.productrecommendation.repository.RecommendationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;

@Slf4j
@Service
public class RecommendationServiceImp implements RecommendationService {
    private RecommendationRepository repo;

    @Autowired
    public RecommendationServiceImp(RecommendationRepository recommendationRepository) {
        this.repo = recommendationRepository;
    }

    @Override
    public HashSet<String> getProductRecommendations(String username) {
        username = username.toLowerCase();

        // Max amount of recommendations
        int MAX_COUNT = 5;

        HashSet<String> productRecommendations = new HashSet<>();
        int size = 0;
        log.debug("Fetching recommendations for username: {}", username);

        // In case of non-guest user,
        if (username != null && !username.equals("")) {
            productRecommendations = this.repo.getProductRecommendations(username, MAX_COUNT);
            size = productRecommendations.size();
            log.debug("Found {} recommendations", size);
        }
        // In case there are no recommendations, (or if user is a guest user)
        if (size == 0) {
            log.debug("No recommendations found, fetching random recommendations!");
            productRecommendations = this.repo.getAllProducts(MAX_COUNT);
        }
        // In case there are recommendations less than required
        else if (size < MAX_COUNT) {
            log.debug("Found {} recommendations and {} random recommendations", size, MAX_COUNT - size);
            productRecommendations.addAll(this.repo.getAllProducts(size - MAX_COUNT));
        }
        return productRecommendations;
    }

    @Override
    public void addIncomingData(IncomingData incomingData) {
        String category = incomingData.getProductCategory().toUpperCase();
        String productId = incomingData.getProductId();
        String username = incomingData.getUsername().toLowerCase();
        this.repo.addData(category, productId, username);
        log.debug("Added {CATEGORY: {}, PRODUCT_ID: {}, USERNAME: {}} to the database!", category, productId, username);
    }

    @Override
    public void deleteProductNode(String productId) {
        this.repo.deleteProductNode(productId);
        log.debug("Deleted product with id {}", productId);
    }
}
