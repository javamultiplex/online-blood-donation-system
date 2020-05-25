package com.javamultiplex.repository;

import com.javamultiplex.entity.BloodDonor;
import com.javamultiplex.enums.DonorStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BloodDonorRepository extends JpaRepository<BloodDonor, Long> {
    List<BloodDonor> findAllByAddressZipAndBloodGroupAndStatus(String zip, String bloodGroup, DonorStatus status);
    List<BloodDonor> findAllByStatus(DonorStatus status);
}
