package com.javamultiplex.repository;

import com.javamultiplex.entity.BloodDonor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BloodDonorRepository extends JpaRepository<BloodDonor, Long> {
}
