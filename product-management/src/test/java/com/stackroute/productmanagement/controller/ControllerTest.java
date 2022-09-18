package com.stackroute.productmanagement.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.productmanagement.model.Product;
import com.stackroute.productmanagement.model.SearchQuery;
import com.stackroute.productmanagement.service.ProductService;
import com.stackroute.productmanagement.service.SearchService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class ControllerTest {
    @Autowired
    private MockMvc mockMvcProduct;
    @Autowired
    private MockMvc mockMvcSearch;

    @Mock
    private ProductService productService;
    @Mock
    private SearchService searchService;

    @InjectMocks
    private ProductController productController;
    @InjectMocks
    private SearchController searchController;

    @BeforeEach
    public void setup(){
        mockMvcProduct = MockMvcBuilders.standaloneSetup(productController).build();
        mockMvcSearch = MockMvcBuilders.standaloneSetup(searchController).build();
    }

    /*
    @Test
    public void testProductController() throws Exception {
        UUID productId = UUID.randomUUID();
        Product p = new Product(productId, "Test Product", "Test Description","Test VerificationId", "Test Category", 3.5, null);
        doNothing().when(productService).addProduct(p);
        mockMvcProduct.perform(
                    post("/product/add")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(asJsonString(p))
                )
                .andExpect(status().isOk());
        verify(productService, times(1)).addProduct(any());
    }

    @Test
    public void testSearchController() throws Exception {
        UUID productId = UUID.randomUUID();
        Product p = new Product(productId, "Test Product", "Test Description","Test VerificationId", "Test Category", 3.5, null);
        when(searchService.searchProduct(any())).thenReturn(Arrays.asList(p));
        SearchQuery searchQuery = new SearchQuery("Test Product", "");
        mockMvcSearch.perform(
                        post("/search")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(asJsonString(searchQuery))
                )
                .andExpect(status().isOk());
        verify(searchService, times(1)).searchProduct(any());
    }
*/
    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
