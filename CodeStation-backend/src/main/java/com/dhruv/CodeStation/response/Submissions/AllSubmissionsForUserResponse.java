package com.dhruv.CodeStation.response.Submissions;

import com.dhruv.CodeStation.model.Submission;
import com.dhruv.CodeStation.response.StandardResponse;

import java.util.List;

public class AllSubmissionsForUserResponse extends StandardResponse {

    List<Submission> submissions;
    public AllSubmissionsForUserResponse(String status, String message, List<Submission> submissions) {
        super.setStatus(status);
        super.setMessage(message);
        this.submissions = submissions;

    }

    public List<Submission> getSubmissions() {
        return submissions;
    }

    public void setSubmissions(List<Submission> submissions) {
        this.submissions = submissions;
    }
}
