package com.example.model.controller;
import com.example.model.entity.TestDriveRequest;
import com.example.model.service.TestDriveRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/testdrive")
public class TestDriveRequestController {

    @Autowired
    private TestDriveRequestService testDriveRequestService;

    @PostMapping
    public ResponseEntity<TestDriveRequest> createRequest(@RequestBody TestDriveRequest request) {
        TestDriveRequest savedRequest = testDriveRequestService.saveRequest(request);
        return ResponseEntity.ok(savedRequest);
    }

    @GetMapping
    public ResponseEntity<List<TestDriveRequest>> getAllRequests() {
        List<TestDriveRequest> requests = testDriveRequestService.getAllRequests();
        return ResponseEntity.ok(requests);
    }
}
