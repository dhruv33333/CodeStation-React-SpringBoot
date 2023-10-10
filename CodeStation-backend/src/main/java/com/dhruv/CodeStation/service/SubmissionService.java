package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.response.StandardResponse;
import com.dhruv.CodeStation.response.Submissions.AddSubmissionResponse;
import com.dhruv.CodeStation.response.Submissions.AllSubmissionsForUserResponse;
import com.dhruv.CodeStation.response.Submissions.SubmissionsResponse;

public interface SubmissionService {
    public AddSubmissionResponse addSubmission(int userId, int problemId, String submissionCode, boolean isAccepted);

    public SubmissionsResponse getSubmissionsForProblem(int userId, int problemId);

    public AllSubmissionsForUserResponse getAllSubmissionsForUser(int userId);
}
