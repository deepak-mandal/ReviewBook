package com.stackroute.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "userdata")
public class User implements Serializable {

    @Id
//  private String id;
    private String username;
    private String password;
    private String emailId;
    private String role;
    private String gstIN;
    private String organisationName;
    private String location;


}
