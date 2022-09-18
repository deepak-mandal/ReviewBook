package com.stackroute.productmanagement.service;

import com.stackroute.productmanagement.model.Product;
import com.stackroute.productmanagement.model.SearchQuery;
import com.stackroute.productmanagement.repository.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchServiceImp implements SearchService {
    private SearchRepository searchRepository;

    @Autowired
    public SearchServiceImp(SearchRepository searchRepository) {
        this.searchRepository = searchRepository;
    }

    @Override
    public List<Product> searchProduct(SearchQuery searchQuery) {
        String name = searchQuery.getQuery();
        String category = searchQuery.getCategory();
        if (category.equals("") || category.equals("all")) {
            return this.searchRepository.searchByName(name);
        }
        return this.searchRepository.searchByNameAndCategory(name, category);
    }
}
