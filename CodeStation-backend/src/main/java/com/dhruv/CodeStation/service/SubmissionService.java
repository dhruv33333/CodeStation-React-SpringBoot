package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.response.StandardResponse;
import com.dhruv.CodeStation.response.Submissions.AddSubmissionResponse;
import com.dhruv.CodeStation.response.Submissions.SubmissionsResponse;

public interface SubmissionService {
    public AddSubmissionResponse addSubmission(int userId, int problemId, String submissionCode);

    public SubmissionsResponse getSubmissionsForProblem(int userId, int problemId);
}
