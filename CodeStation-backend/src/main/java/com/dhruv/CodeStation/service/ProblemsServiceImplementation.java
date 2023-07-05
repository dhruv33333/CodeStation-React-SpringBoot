package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.DTO.ProblemDTO;
import com.dhruv.CodeStation.model.Problem;
import com.dhruv.CodeStation.model.User;
import com.dhruv.CodeStation.repository.ProblemRepository;
import com.dhruv.CodeStation.repository.UserRepository;
import com.dhruv.CodeStation.response.Problems.AllProblemsResponse;
import com.dhruv.CodeStation.response.Problems.ProblemResponse;
import com.dhruv.CodeStation.response.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProblemsServiceImplementation implements  ProblemsService{

    @Autowired
    private ProblemRepository problemRepository;

    @Autowired
    private UserRepository userRepository;


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

    @Override
    public StandardResponse addProblem(int userId, ProblemDTO problemDTO) {
        Optional<User> userOptional = userRepository.findById(userId);

        if(!userOptional.isPresent()) {
            return new StandardResponse("failure", "User not found");
        }

        User user = userOptional.get();
        if(!user.isAdmin()) {
            return new StandardResponse("failure", "Permission denied!");
        }

        Problem problem = new Problem(problemDTO);

        try {
            problemRepository.save(problem);
        } catch (Exception e){
            return new StandardResponse("failure", "Unable to connect to DB");
        }

        return new StandardResponse("success", "Problem successfully added!");
    }
}
