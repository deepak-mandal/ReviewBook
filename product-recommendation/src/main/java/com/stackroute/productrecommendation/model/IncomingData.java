package com.stackroute.productrecommendation.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.neo4j.core.schema.Node;

@Node
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IncomingData {
    @Id
    private Integer id;
    private String username;
    private String productId;                   // Convert UUID to string before receiving in frontend
    private String productCategory;
    //    private String productName;           // Removing this since Product Owner can change name
}
