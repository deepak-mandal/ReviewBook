package com.stackroute.productmanagement.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class rating {

    private String username;
    private double rating;
    private String productId;
}
