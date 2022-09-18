package com.stackroute.productrecommendation.repository;

import com.stackroute.productrecommendation.model.IncomingData;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.HashSet;

@Repository
public interface RecommendationRepository extends Neo4jRepository<IncomingData, Integer> {

    @Query("MATCH (n: Product) {productId: $productId} DELETE DETACH n;")
    void deleteProductNode(String productId);

    @Query(
            "MERGE (c: Category {name: $category})" +
            "MERGE (p: Product {productId: $productId, category: $category})" +
            "MERGE (u: User {name: $username})" +
            "MERGE (u) -[:LIKES_PRODUCT]-> (p)" +
            "MERGE (u) -[:LIKES_CATEGORY]-> (c)" +
            "MERGE (p) -[:BELONGS_TO]-> (c)"
    )
    void addData(String category, String productId, String username);

    // 1. Find categories liked by current user
    // 2. Find other users who like the same category as current user
    // 3. Find all products of same category liked by other users
    // 4. Return these products, which have not been liked by current user
    @Query(
            "MATCH (o:User {name: $username}) -[:LIKES_CATEGORY]-> (c: Category) " +
            "MATCH (x:User) -[:LIKES_CATEGORY]-> (c) " +
            "MATCH (p: Product {category: c.name}) <-[:LIKES_PRODUCT] - (x:User) " +
            "WHERE NOT EXISTS((o)-[:LIKES_PRODUCT]->(p)) " +
            "RETURN p.productId LIMIT $limit"
    )
    HashSet<String> getProductRecommendations(String username, int limit);

    @Query(
            "MATCH (p: Product) RETURN p.productId LIMIT $limit;"
    )
    HashSet<String> getAllProducts(int limit);
}
