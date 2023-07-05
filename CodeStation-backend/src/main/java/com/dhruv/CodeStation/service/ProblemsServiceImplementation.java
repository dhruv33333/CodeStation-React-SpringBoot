package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.model.Problem;
import com.dhruv.CodeStation.repository.ProblemRepository;
import com.dhruv.CodeStation.response.AllProblemsResponse;
import com.dhruv.CodeStation.response.ProblemResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProblemsServiceImplementation implements  ProblemsService{

    @Autowired
    private ProblemRepository problemRepository;


    // hard code for now
//    Problem[] problems = {new Problem(1, "201. Bitwise AND of Numbers Range", "Medium", "42%", "lorem ipsum blablalbalblalbalblalbal", "left = 5, right = 7", "4"),  new Problem(2, "201. Bitwise AND of Numbers Range", "Medium", "42%", "lorem ipsum blablalbalblalbalblalbal", "left = 5, right = 7", "4"), new Problem(3, "201. Bitwise AND of Numbers Range", "Medium", "42%", "lorem ipsum blablalbalblalbalblalbal", "left = 5, right = 7", "4"), new Problem(4, "201. Bitwise AND of Numbers Range", "Medium", "42%", "lorem ipsum blablalbalblalbalblalbal", "left = 5, right = 7", "4")};
    @Override
    public AllProblemsResponse getAllProblems() {
        List<Problem> problems = problemRepository.findAll();
        if(problems == null) {
            return new AllProblemsResponse("failure", "Couldn't fetch problems", null);
        }
        if(problems.size() == 0) {
            return new AllProblemsResponse("success", "No problems found", problems);
        }

        return new AllProblemsResponse("success", "Successfully fetched", problems);
    }

    @Override
    public ProblemResponse getProblem(int id) {

        Optional<Problem> problemOptional = problemRepository.findById(id);
        if(!problemOptional.isPresent()) {
            return new ProblemResponse(null, "No problem found with given id", "failure");
        }

        Problem problem = problemOptional.get();
        return new ProblemResponse(problem, "success", "ok");
    }
}
