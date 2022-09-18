package com.stackroute.reviewmanagement.service;

import com.stackroute.reviewmanagement.model.Review;
import com.stackroute.reviewmanagement.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.UUID;
@Service
public class ReviewServiceImp implements ReviewService{
    @Autowired
    public ReviewRepository repo;


    public ReviewServiceImp(ReviewRepository repo) {
        super();
        this.repo = repo;
    }

    @Override
    public void addReview(Review r) {

        this.repo.save(r);
    }

    @Override
    public void editReview(Review r) {
        if(this.repo.existsById(r.getId()))
            this.repo.save(r);
    }

    @Override
    public void deleteReview(UUID review_id) {

        this.repo.deleteById(review_id);
    }

    @Override
    public HashSet<Review> getReviewsByUsername(String username) {
        return repo.findallByUsername(username);


    }

    @Override
    public HashSet<Review> getReviewsByProductId(String product_id) {
        return repo.findallByProductId(product_id);

    }

    @Override
    public void like (String userName, UUID reviewId) {

         Review R = repo.findbyReviewId(reviewId);

         HashSet<String> usernames = R.getLikedUsernames();
         usernames.add(userName);

         R.setLikedUsernames(usernames);
         int k = R.getLikeCount();
         k++;
         R.setLikeCount(k);
         repo.save(R);
    }
    @Override
    public void unlike (String userName, UUID reviewId) {
        Review R = repo.findbyReviewId(reviewId);
        HashSet<String> usernames = R.getLikedUsernames();
        usernames.remove(userName);
        R.setLikedUsernames(usernames);
        int k = R.getLikeCount();
        k--;
        R.setLikeCount(k);
        repo.save(R);
    }

    @Override
    public Review getreviewbyreviewId(UUID reviewId) {
        return repo.findbyReviewId(reviewId);
    }

}
