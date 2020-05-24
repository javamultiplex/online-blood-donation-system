package com.javamultiplex.repository;

import com.javamultiplex.entity.BloodDonor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface BloodDonorRepository extends JpaRepository<BloodDonor, Long> {
    List<BloodDonor> findByAddressZipAndBloodGroup(String zip, String bloodGroup);
}
