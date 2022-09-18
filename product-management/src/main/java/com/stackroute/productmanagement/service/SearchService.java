package com.stackroute.productmanagement.service;

import com.stackroute.productmanagement.model.Product;
import com.stackroute.productmanagement.model.SearchQuery;

import java.util.List;

public interface SearchService {
    List<Product> searchProduct(SearchQuery searchQuery);
}
