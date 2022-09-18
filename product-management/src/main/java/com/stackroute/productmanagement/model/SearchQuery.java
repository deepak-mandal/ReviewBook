package com.stackroute.productmanagement.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchQuery {
    private String query;
    private String category;

    public String getQuery() {
        if (query == null)
            return "";
        return query.toLowerCase().trim();
    }

    public String getCategory() {
        if (category == null)
            return null;
        return category.toLowerCase().trim();
    }
}
