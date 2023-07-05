package com.dhruv.CodeStation.repository;

import com.dhruv.CodeStation.model.Problem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProblemRepository extends JpaRepository<Problem, Integer> {  //Integer is for primary key which is int in our case

}
