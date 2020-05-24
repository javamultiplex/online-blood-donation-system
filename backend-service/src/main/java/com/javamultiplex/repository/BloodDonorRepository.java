package com.javamultiplex.repository;

import com.javamultiplex.entity.BloodDonor;
import com.javamultiplex.enums.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface BloodDonorRepository extends JpaRepository<BloodDonor, Long> {
    List<BloodDonor> findAllByAddressZipAndBloodGroupAndStatus(String zip, String bloodGroup, Status status);
    List<BloodDonor> findAllByStatus(Status status);
}
