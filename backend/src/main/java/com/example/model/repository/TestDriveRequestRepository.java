package com.example.model.repository;
import com.example.model.entity.TestDriveRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestDriveRequestRepository extends JpaRepository<TestDriveRequest, Long> {
}
