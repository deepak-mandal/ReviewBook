package com.stackroute.productmanagement.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.UUID;

@Document(collection = "product")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    //private UUID productId = UUID.randomUUID();// Mongo ObjectId
    private String productId = UUID.randomUUID().toString();// Mongo ObjectId
    private String username;
    //private String userName;
    private String productName;
    private String description;
    private String verificationId;
    private String category;
    private double averageRating;
    private String[] specs;
    //private String specs;
    private byte[] imageByte;
    private String imageName;
    private String type;
    HashSet<String> RatedUsernames = new HashSet<>();


    /*
    * @Id
    private String docId;

    private byte[] imageByte;

    private String imageName;

    private String type;

    //private String productId;
    private String productName;
    private String productDescription;
    private String verificationId;
    private String category;
    private String averageRating;

    //private String[] specification;
    private String specification;

    private String username;    //
    * */




/*
    public Product(String userName, String name, String description,String verificationId, String category, double averageRating,  String[] specs,byte[] imageByte, String imageName,String type) {
        this.userName=userName;
        this.productName = name;
        this.description = description;
        this.verificationId = verificationId;
        this.category = category;
        this.averageRating = averageRating;
        this.specs = specs;
        this.imageByte=imageByte;
        this.imageName=imageName;
        this.type=type;
    }

    public Product(UUID productId, String productName, String description, String verificationId, String category, double averageRating, String[] specs) {
        this.productId = productId;
        this.productName = productName;
        this.description = description;
        this.verificationId = verificationId;
        this.category = category;
        this.averageRating = averageRating;
        this.specs = specs;
    }*/
}
