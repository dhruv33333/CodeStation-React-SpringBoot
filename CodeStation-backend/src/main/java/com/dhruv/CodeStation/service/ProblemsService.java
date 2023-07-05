package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.DTO.ProblemDTO;
import com.dhruv.CodeStation.response.Problems.AllProblemsResponse;
import com.dhruv.CodeStation.response.Problems.ProblemResponse;
import com.dhruv.CodeStation.response.StandardResponse;

public interface ProblemsService {
    public AllProblemsResponse getAllProblems();
    public ProblemResponse getProblem(int id);
    public StandardResponse addProblem(int userId, ProblemDTO problemDTO);
}
