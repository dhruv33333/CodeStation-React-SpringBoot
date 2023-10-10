package com.dhruv.CodeStation.model;

import jakarta.persistence.*;
import org.hibernate.annotations.NaturalId;

@Entity
@Table(name = "submission")
public class Submission {
    @Id
    @Column(nullable = false, unique = true, length = 12)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false)
    private int userId;

    @Column(nullable = false)
    private int problemId;

    private boolean isAccepted;

    @Column(length = 65555)
    private String submissionCode;

    public Submission() {
    }

    public Submission(int userId, int problemId, boolean isAccepted, String submissionCode) {
        this.userId = userId;
        this.problemId = problemId;
        this.isAccepted = isAccepted;
        this.submissionCode = submissionCode;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getProblemId() {
        return problemId;
    }

    public void setProblemId(int problemId) {
        this.problemId = problemId;
    }

    public boolean isAccepted() {
        return isAccepted;
    }

    public void setAccepted(boolean accepted) {
        isAccepted = accepted;
    }

    public String getSubmissionCode() {
        return submissionCode;
    }

    public void setSubmissionCode(String submissionCode) {
        this.submissionCode = submissionCode;
    }
}
