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

    @NaturalId
    @Column(nullable = false, unique = true)
    private int userId;

    @NaturalId
    @Column(nullable = false, unique = true)
    private int problemId;

    private boolean isAccepted;
    private String submissionCode;

    public Submission() {
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
