package com.dhruv.CodeStation.response.Submissions;

import com.dhruv.CodeStation.response.StandardResponse;

public class AddSubmissionResponse extends StandardResponse {

    boolean isAccepted;
    public AddSubmissionResponse(String status, String message, Boolean isAccepted) {
        super.setStatus(status);
        super.setMessage(message);
        this.isAccepted = isAccepted;
    }

    public boolean isAccepted() {
        return isAccepted;
    }

    public void setAccepted(boolean accepted) {
        isAccepted = accepted;
    }
}
