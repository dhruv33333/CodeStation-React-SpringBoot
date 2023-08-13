package com.dhruv.CodeStation.repository;

import com.dhruv.CodeStation.model.Submission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubmissionRepository extends JpaRepository<Submission, Integer> {

    Submission findByUserId(int userId);
    Submission findByProblemId(int problemId);

    List<Submission> findByUserIdAndProblemId(int userId, int problemId);
}
