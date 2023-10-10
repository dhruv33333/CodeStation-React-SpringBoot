package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.model.Problem;
import com.dhruv.CodeStation.model.Submission;
import com.dhruv.CodeStation.repository.SubmissionRepository;
import com.dhruv.CodeStation.response.Submissions.AddSubmissionResponse;
import com.dhruv.CodeStation.response.Submissions.AllSubmissionsForUserResponse;
import com.dhruv.CodeStation.response.Submissions.SubmissionsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class SubmissionServiceImplementation implements SubmissionService {

    @Autowired
    private SubmissionRepository submissionRepository;

    @Override
    public AddSubmissionResponse addSubmission(int userId, int problemId, String submissionCode, boolean isAccepted) {
        try {
            Submission submission = new Submission(userId, problemId,  isAccepted, submissionCode);
            submissionRepository.save(submission);
            return new AddSubmissionResponse("ok", "Successfully submitted!", isAccepted);
        } catch(Exception e) {
            return new AddSubmissionResponse("failure", "Can't connect to DB, submission failed!", isAccepted);
        }
    }

    @Override
    public SubmissionsResponse getSubmissionsForProblem(int userId, int problemId) {
        try {
            List<Submission> submissions = submissionRepository.findByUserIdAndProblemId(userId, problemId);
            SubmissionsResponse res = new SubmissionsResponse("ok", "Submissions fetched successfully", submissions);
            return res;
        } catch (Exception e){
            return new SubmissionsResponse("failure", "Unable to fetch submissions", null);
        }

    }

    @Override
    public AllSubmissionsForUserResponse getAllSubmissionsForUser(int userId) {
        try {
            List<Submission> submissions = submissionRepository.findByUserId(userId);
            AllSubmissionsForUserResponse res = new AllSubmissionsForUserResponse("ok", "Submissions fetched successfully", submissions);
            return res;
        } catch (Exception e) {
            return new AllSubmissionsForUserResponse("failure", "Unable to fetch submissions", null);
        }
    }
}
