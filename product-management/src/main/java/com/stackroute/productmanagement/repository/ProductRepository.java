package com.stackroute.productmanagement.repository;

import com.stackroute.productmanagement.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
//public interface ProductRepository extends MongoRepository<Product, UUID>
public interface ProductRepository extends MongoRepository<Product, String> {

    @Query("{category: ?0}")
    List<Product> findAllByCategory(String category);
}
