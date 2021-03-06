package com.javamultiplex.resource;

import com.javamultiplex.entity.BloodDonor;
import com.javamultiplex.enums.BloodDonorStatus;
import com.javamultiplex.model.BloodDonorStatusDTO;
import com.javamultiplex.service.BloodDonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class BloodDonorResource {

    private final BloodDonorService bloodDonorService;

    @Autowired
    public BloodDonorResource(BloodDonorService bloodDonorService) {
        this.bloodDonorService = bloodDonorService;
    }

    @PostMapping(value = "/donor", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<BloodDonor> register(@RequestParam(name = "file") MultipartFile image,
                                               @RequestParam(name = "request") String bloodDonor) {
        return new ResponseEntity<>(bloodDonorService.register(bloodDonor, image), HttpStatus.CREATED);
    }

    @GetMapping(value = "/donors")
    public List<BloodDonor> findAll(@RequestParam(name = "zip", required = false) String zip,
                                    @RequestParam(name = "bloodGroup", required = false) String bloodGroup,
                                    @RequestParam(name = "status", required = false) BloodDonorStatus status) {
        List<BloodDonor> bloodDonors;
        if (status != null) {
            bloodDonors = bloodDonorService.findAll(status);
        } else {
            bloodDonors = bloodDonorService.search(zip, bloodGroup);
        }
        return bloodDonors;
    }

    @GetMapping(value = "/donor/{id}")
    public BloodDonor find(@PathVariable(name = "id") Long id) {
        return bloodDonorService.findById(id);
    }

    @DeleteMapping(value = "/donor/{id}")
    public BloodDonor delete(@PathVariable(name = "id") Long id) {
        return bloodDonorService.delete(id);
    }


    @PatchMapping(value = "/donor/{id}")
    public BloodDonor update(@PathVariable(name = "id") Long id, @RequestBody BloodDonorStatusDTO donorStatusDTO) {
        return bloodDonorService.update(id, donorStatusDTO);
    }
}
