package com.example.model.service;

import com.example.model.entity.TestDriveRequest;
import com.example.model.repository.TestDriveRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestDriveRequestService {

    @Autowired
    private TestDriveRequestRepository testDriveRequestRepository;

    public TestDriveRequest saveRequest(TestDriveRequest request) {
        return testDriveRequestRepository.save(request);
    }

    public List<TestDriveRequest> getAllRequests() {
        return testDriveRequestRepository.findAll();
    }
}
