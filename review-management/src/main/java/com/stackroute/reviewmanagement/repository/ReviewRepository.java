package com.stackroute.reviewmanagement.repository;

import com.stackroute.reviewmanagement.model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.UUID;


@Repository
public interface ReviewRepository extends MongoRepository<Review, UUID> {


    @Query("{'userName':?0}") // to find a Review by userName
    HashSet<Review> findallByUsername(String userName);

    @Query("{'reviewId':?0}") // to find a Review by ReviewId
    Review findbyReviewId(UUID reviewID);


    @Query("{productId: ?0}") // to find Review by ProductId
    HashSet<Review> findallByProductId(String productId);
}
