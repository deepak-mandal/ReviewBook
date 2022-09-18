package com.stackroute.productrecommendation.service;

import com.stackroute.productrecommendation.model.IncomingData;

import java.util.HashSet;

public interface RecommendationService {
    HashSet<String> getProductRecommendations(String username);
    void addIncomingData(IncomingData incomingData);
    void deleteProductNode(String productId);
}
