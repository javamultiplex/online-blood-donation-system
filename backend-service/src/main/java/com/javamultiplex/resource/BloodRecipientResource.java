package com.javamultiplex.resource;

import com.javamultiplex.entity.BloodRecipient;
import com.javamultiplex.model.BloodRecipientStatusDTO;
import com.javamultiplex.service.BloodRecipientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * @author Rohit Agarwal on 30/05/20 1:51 pm
 * @copyright www.javamultiplex.com
 */
@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class BloodRecipientResource {

    private final BloodRecipientService bloodRecipientService;

    @Autowired
    public BloodRecipientResource(BloodRecipientService bloodRecipientService) {
        this.bloodRecipientService = bloodRecipientService;
    }

    @PostMapping(value = "/recipient", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<BloodRecipient> register(@RequestParam(name = "file") MultipartFile prescription,
                                                   @RequestParam(name = "request") String bloodRecipient) {
        return new ResponseEntity<>(bloodRecipientService.register(bloodRecipient, prescription), HttpStatus.CREATED);
    }

    @GetMapping("/recipients")
    public List<BloodRecipient> findAll() {
        return bloodRecipientService.findAll();
    }

    @GetMapping("/recipient/{id}")
    public BloodRecipient findById(@PathVariable(name = "id") Long id) {
        return bloodRecipientService.findById(id);
    }

    @DeleteMapping("/recipient/{id}")
    public BloodRecipient delete(@PathVariable(name = "id") Long id) {
        return bloodRecipientService.delete(id);
    }

    @PatchMapping("/recipient/{id}")
    public BloodRecipient update(@PathVariable(name = "id") Long id,
                                 @RequestBody BloodRecipientStatusDTO bloodRecipientStatusDTO) {
        return bloodRecipientService.update(id, bloodRecipientStatusDTO);
    }
}
