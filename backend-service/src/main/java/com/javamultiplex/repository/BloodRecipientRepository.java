package com.javamultiplex.repository;

import com.javamultiplex.entity.BloodRecipient;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Rohit Agarwal on 25/05/20 10:14 pm
 * @copyright www.javamultiplex.com
 */
public interface BloodRecipientRepository extends JpaRepository<BloodRecipient, Long> {
}
