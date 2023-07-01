package com.dhruv.CodeStation.service;

import com.dhruv.CodeStation.response.AllProblemsResponse;
import com.dhruv.CodeStation.response.Problem;
import org.springframework.stereotype.Service;

@Service
public class ProblemsServiceImplementation implements  ProblemsService{

    // hard code for now
    Problem[] problems = {new Problem(1, "201. Bitwise AND of Numbers Range", "Medium", "42%", "lorem ipsum blablalbalblalbalblalbal", "left = 5, right = 7", "4"),  new Problem(1, "201. Bitwise AND of Numbers Range", "Medium", "42%", "lorem ipsum blablalbalblalbalblalbal", "left = 5, right = 7", "4"), new Problem(1, "201. Bitwise AND of Numbers Range", "Medium", "42%", "lorem ipsum blablalbalblalbalblalbal", "left = 5, right = 7", "4"), new Problem(1, "201. Bitwise AND of Numbers Range", "Medium", "42%", "lorem ipsum blablalbalblalbalblalbal", "left = 5, right = 7", "4")};
    @Override
    public AllProblemsResponse getAllProblems() {
        return new AllProblemsResponse("ok", "Fetched successfully", problems);
    }
}
