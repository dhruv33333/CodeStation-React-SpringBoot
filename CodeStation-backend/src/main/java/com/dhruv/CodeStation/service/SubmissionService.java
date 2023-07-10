package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.response.StandardResponse;
import com.dhruv.CodeStation.response.Submissions.AddSubmissionResponse;

public interface SubmissionService {
    public AddSubmissionResponse addSubmission(int userId, int problemId, String submissionCode);
}
