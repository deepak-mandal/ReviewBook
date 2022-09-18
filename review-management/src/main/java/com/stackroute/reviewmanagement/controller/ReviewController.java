package com.stackroute.reviewmanagement.controller;

import com.stackroute.reviewmanagement.model.Like;
import com.stackroute.reviewmanagement.model.Review;
import com.stackroute.reviewmanagement.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.UUID;

@CrossOrigin("*")
@RestController
@RequestMapping("/review")


public class ReviewController {
    private ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        super();
        this.reviewService = reviewService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> addReview(@RequestBody Review r) {
        this.reviewService.addReview(r);
        return new ResponseEntity<>(r, HttpStatus.OK);
    }
    @PutMapping("/edit")
    public ResponseEntity<?> editReview(@RequestBody Review r) {
        this.reviewService.editReview(r);
        return new ResponseEntity<>("edited", HttpStatus.OK);
    }
    @PostMapping("/like")
    public void like(@RequestBody Like l) {

        UUID rid = UUID.fromString(l.getReviewId());
        this.reviewService.like(l.getUserName(), rid);

    }
    @PostMapping("/unlike")
    public void unlike(@RequestBody Like l) {
        UUID rid = UUID.fromString(l.getReviewId());
        this.reviewService.unlike(l.getUserName(), rid);


    }

    @GetMapping("/r/{reviewId}")
    public Review getReviewsByReviewId(@PathVariable String reviewId) {
        UUID rid = UUID.fromString(reviewId);

        return this.reviewService.getreviewbyreviewId(rid);
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> getReviewsByUsername(@PathVariable String username) {
        return new ResponseEntity<>(this.reviewService.getReviewsByUsername(username), HttpStatus.OK);
    }


    @GetMapping("/product/{productId}")
    public ResponseEntity<?> getReviewsByProductId(@PathVariable String productId) {
        return new ResponseEntity<>(this.reviewService.getReviewsByProductId(productId), HttpStatus.OK);
    }
    @DeleteMapping("/delete/{review_id}")
    public void deleteReviewsByReviewId(@PathVariable UUID review_id) {
        this.reviewService.deleteReview(review_id);
    }




    }
