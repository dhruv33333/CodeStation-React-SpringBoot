package com.dhruv.CodeStation.controller;

import com.dhruv.CodeStation.DTO.SubmissionDTO;
import com.dhruv.CodeStation.model.User;
import com.dhruv.CodeStation.response.Submissions.AddSubmissionResponse;
import com.dhruv.CodeStation.response.Submissions.AllSubmissionsForUserResponse;
import com.dhruv.CodeStation.response.Submissions.SubmissionsResponse;
import com.dhruv.CodeStation.service.SubmissionService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/submission")
public class SubmissionsController {

    @Autowired
    private SubmissionService submissionService;

    @PostMapping("/add")
    public ResponseEntity<AddSubmissionResponse> addSubmission(@RequestBody SubmissionDTO submissionDTO) {
        AddSubmissionResponse res = submissionService.addSubmission(submissionDTO.getUserId(), submissionDTO.getProblemId(), submissionDTO.getSubmissionCode(), submissionDTO.getAccepted());
        return ResponseEntity.status(200).body(res);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubmissionsResponse> getSubmissionsForProblem(@PathVariable("id") int id, @RequestParam("userId") int userId) {
        SubmissionsResponse res = submissionService.getSubmissionsForProblem(userId, id);
        return ResponseEntity.status(200).body(res);
    }

    @GetMapping("/getSubmissionsInfo")
    public ResponseEntity<AllSubmissionsForUserResponse> getAllSubmissionsForUser(HttpServletRequest request) {
        User loggedUser = (User) request.getAttribute("user");
        AllSubmissionsForUserResponse res = submissionService.getAllSubmissionsForUser(loggedUser.getId());
        return ResponseEntity.status(200).body(res);
    }

}
