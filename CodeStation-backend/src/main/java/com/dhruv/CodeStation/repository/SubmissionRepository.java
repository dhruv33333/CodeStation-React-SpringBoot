package com.dhruv.CodeStation.repository;

import com.dhruv.CodeStation.model.Submission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubmissionRepository extends JpaRepository<Submission, Integer> {

    Submission findByUserId(int userId);
    Submission findByProblemId(int problemId);

}
