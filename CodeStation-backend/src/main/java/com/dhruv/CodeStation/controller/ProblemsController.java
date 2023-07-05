package com.dhruv.CodeStation.controller;

import com.dhruv.CodeStation.response.AllProblemsResponse;
import com.dhruv.CodeStation.response.ProblemResponse;
import com.dhruv.CodeStation.service.ProblemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/problem")
public class ProblemsController {

    @Autowired
    ProblemsService problemsService;

    @GetMapping("/all")
    public ResponseEntity<AllProblemsResponse> getAllProblems() {

        AllProblemsResponse res = problemsService.getAllProblems();
        return ResponseEntity.status(200).body(res);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProblemResponse> getProblem(@PathVariable("id") int id) {

        ProblemResponse res = problemsService.getProblem(id);
        return ResponseEntity.status(200).body(res);
    }

//    @PostMapping("/add-problem")
//    public ResponseEntity<>
}
