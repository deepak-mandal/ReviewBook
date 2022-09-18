package com.stackroute.reviewmanagement.model;


import lombok.Data;

import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;




@Document(collection = "reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Like {
    String userName;
    String reviewId;
}
