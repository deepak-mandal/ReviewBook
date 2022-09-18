package com.stackroute.productmanagement.repository;

import com.stackroute.productmanagement.model.Product;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class RepositoryTest {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private SearchRepository searchRepository;
/*
    @Test
    public void testProductRepoSave(){
        UUID productId = UUID.randomUUID();
        Product p = new Product(productId, "Test Product", "Test Description","Test VerificationId", "Test Category", 3.5, null);
        productRepository.save(p);
        Optional<Product> tmp = productRepository.findById(productId);
        assertTrue(tmp.isPresent());
        assertEquals(tmp.get().getProductName(), p.getProductName());
        productRepository.deleteById(productId);
    }

    @Test
    public void testSearchRepo(){
        UUID productId = UUID.randomUUID();
        Product p = new Product(productId, "Test Product", "Test Description","Test VerificationId", "Test Category", 3.5, null);
        productRepository.save(p);
        List<Product> searchResults = searchRepository.searchByName("Test Product");
        assertEquals(searchResults.get(0).getProductId(), productId);
        productRepository.deleteById(productId);
    }*/
}
