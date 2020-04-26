package com.javamultiplex.resource;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.javamultiplex.entity.BloodDonor;
import com.javamultiplex.repository.BloodDonorRepository;
import com.javamultiplex.service.BloodDonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/")
public class BloodDonorResource {

    private final BloodDonorService bloodDonorService;

    @Autowired
    public BloodDonorResource(BloodDonorService bloodDonorService) {
        this.bloodDonorService = bloodDonorService;
    }

    @PostMapping(value = "/register", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<BloodDonor> register(@RequestParam(name = "file") MultipartFile request,
                                           @RequestParam(name = "request") String bloodDonor) {
        return new ResponseEntity<>(bloodDonorService.register(bloodDonor,request), HttpStatus.CREATED);
    }
}
