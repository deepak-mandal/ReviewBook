package com.stackroute.productmanagement.service;

import com.stackroute.productmanagement.model.Product;
import com.stackroute.productmanagement.model.SearchQuery;
import com.stackroute.productmanagement.repository.ProductRepository;
import com.stackroute.productmanagement.repository.SearchRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.times;


@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class ServiceTest {
    @Mock
    private ProductRepository productRepository;
    @InjectMocks
    private ProductService productService;

    @Mock
    private SearchRepository searchRepository;
    @InjectMocks
    private SearchServiceImp searchService;
/*
    @Test
    public void testProductService(){
        UUID productId = UUID.randomUUID();
        Product p = new Product(productId, "Test Product", "Test Description", "Test VerificationId","Test Category", 3.5, null);
        when(productRepository.save(any())).thenReturn(p);
        productService.addProduct(p);
        verify(productRepository, times(1)).save(any());
    }

    @Test
    public void testSearchService(){
        UUID productId = UUID.randomUUID();
        Product p = new Product(productId, "Test Product", "Test Description", "Test VerificationId","Test Category", 3.5,  null);
        when(productRepository.save(any())).thenReturn(p);
        productService.addProduct(p);

        when(searchRepository.searchByName(anyString())).thenReturn(Arrays.asList(p));
        List<Product> productList = searchService.searchProduct(new SearchQuery(p.getProductName(), ""));
        assertTrue(productList.size() > 0);
        assertNotNull(productList.get(0));
    }*/

}
