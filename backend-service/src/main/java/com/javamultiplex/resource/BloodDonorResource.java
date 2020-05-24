package com.javamultiplex.resource;

import com.javamultiplex.entity.BloodDonor;
import com.javamultiplex.service.BloodDonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "*")
public class BloodDonorResource {

    private final BloodDonorService bloodDonorService;

    @Autowired
    public BloodDonorResource(BloodDonorService bloodDonorService) {
        this.bloodDonorService = bloodDonorService;
    }

    @PostMapping(value = "/register", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<BloodDonor> register(@RequestParam(name = "file") MultipartFile request,
                                               @RequestParam(name = "request") String bloodDonor) {
        return new ResponseEntity<>(bloodDonorService.register(bloodDonor, request), HttpStatus.CREATED);
    }

    @GetMapping(value = "/search")
    public List<BloodDonor> search(@RequestParam(name = "zip") String zip,
                                   @RequestParam(name = "bloodGroup") String bloodGroup) {
        return bloodDonorService.search(zip, bloodGroup);
    }
}
