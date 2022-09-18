package com.stackroute.reviewmanagement.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.UUID;


@Document(collection = "reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Review {

        @Id
        private UUID id=UUID.randomUUID();
        private UUID reviewId = UUID.randomUUID();
        private String productId;
        private String userName;
        private String title;
        private String text;
        private LocalDateTime date = LocalDateTime.now();
        private int likeCount = 0;
        private int dislikeCount;
        HashSet<String> likedUsernames = new HashSet<>();
//        HashSet<String> dislikedUsernames;
}
