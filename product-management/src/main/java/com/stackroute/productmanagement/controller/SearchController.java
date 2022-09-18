package com.stackroute.productmanagement.controller;

import com.stackroute.productmanagement.model.SearchQuery;
import com.stackroute.productmanagement.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/search")
public class SearchController {
    private SearchService searchService;

    @Autowired
    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @PostMapping
    public ResponseEntity<?> searchProduct(@RequestBody SearchQuery searchQuery) {
        return new ResponseEntity<>(this.searchService.searchProduct(searchQuery), HttpStatus.OK);
    }
}
