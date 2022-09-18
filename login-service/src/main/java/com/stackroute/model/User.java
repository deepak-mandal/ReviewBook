package com.stackroute.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Component
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="users")
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property="@id", scope= com.stackroute.model.User.class)
public class User {

    @Id
    private String username;
    private String password;
    private String role;


}
