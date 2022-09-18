package com.stackroute.reviewmanagement.service;

import com.stackroute.reviewmanagement.model.Review;

import java.util.HashSet;
import java.util.UUID;

public interface ReviewService {
    void addReview(Review r);
    void editReview(Review r);
    void deleteReview(UUID review_id);
    HashSet<Review> getReviewsByUsername(String username);
    HashSet<Review> getReviewsByProductId(String product_id);
    void like( String userName, UUID reviewId);
    void unlike( String userName, UUID reviewId);
    Review getreviewbyreviewId(UUID reviewId);

}
