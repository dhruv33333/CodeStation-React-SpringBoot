package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.response.AllProblemsResponse;
import com.dhruv.CodeStation.response.ProblemResponse;

public interface ProblemsService {
    public AllProblemsResponse getAllProblems();

    public ProblemResponse getProblem(int id);
}
