package com.stackroute.productmanagement.repository;

import com.stackroute.productmanagement.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface SearchRepository extends MongoRepository<Product, UUID> {

    @Query("{name: {$regex: ?0, $options: 'i'}}")
    List<Product> searchByName(String name);

    @Query("{name: {$regex: ?0, $options: 'i'}, category: {$regex: ?1, $options: 'i'}}")
    List<Product> searchByNameAndCategory(String name, String category);
}