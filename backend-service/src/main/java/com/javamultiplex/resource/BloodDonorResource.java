package com.javamultiplex.resource;

import com.javamultiplex.entity.BloodDonor;
import com.javamultiplex.repository.BloodDonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class BloodDonorResource {

    @Autowired
    private BloodDonorRepository bloodDonorRepository;

    @PostMapping("/register")
    public ResponseEntity<BloodDonor> register(@RequestBody BloodDonor bloodDonor) {
        BloodDonor body = bloodDonorRepository.save(bloodDonor);
        return new ResponseEntity<>(body, HttpStatus.CREATED);
    }
}
