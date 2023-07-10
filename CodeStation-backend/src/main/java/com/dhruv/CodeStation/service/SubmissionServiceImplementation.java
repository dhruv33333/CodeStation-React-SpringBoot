package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.model.Submission;
import com.dhruv.CodeStation.repository.SubmissionRepository;
import com.dhruv.CodeStation.response.Submissions.AddSubmissionResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class SubmissionServiceImplementation implements SubmissionService {

    @Autowired
    private SubmissionRepository submissionRepository;

    @Override
    public AddSubmissionResponse addSubmission(int userId, int problemId, String submissionCode) {
        Random rand = new Random();
        int tempTester = rand.nextInt(2);
        boolean isAccepted = tempTester == 0 ? false : true;
        try {
            Submission submission = new Submission(userId, problemId,  isAccepted, submissionCode);
            submissionRepository.save(submission);
            return new AddSubmissionResponse("ok", "Successfully submitted!", isAccepted);
        } catch(Exception e) {
            return new AddSubmissionResponse("failure", "Can't connect to DB, submission failed!", isAccepted);
        }
    }
}