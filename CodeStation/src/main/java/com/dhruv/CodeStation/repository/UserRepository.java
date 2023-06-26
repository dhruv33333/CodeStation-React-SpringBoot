package com.dhruv.CodeStation.repository;

import com.dhruv.CodeStation.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {  //Integer is for primary key which is int in our case
     User findByEmail(String email);
}
