package com.stackroute.repository;

import com.stackroute.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    @Query("{'emailId':?0}") //function to find a person by his/her mail-id
    User findByEmailId(String emailId);



}
