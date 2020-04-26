package com.javamultiplex.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.javamultiplex.dto.ErrorResponseDTO;
import com.javamultiplex.entity.BloodDonor;
import com.javamultiplex.error.ServiceException;
import com.javamultiplex.repository.BloodDonorRepository;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @author Rohit Agarwal on 26/04/20 10:02 pm
 * @copyright www.javamultiplex.com
 */
@Service
public class BloodDonorService {

    private final BloodDonorRepository bloodDonorRepository;

    @Autowired
    public BloodDonorService(BloodDonorRepository bloodDonorRepository) {
        this.bloodDonorRepository = bloodDonorRepository;
    }

    public BloodDonor register(String request, MultipartFile profileImage) {
        BloodDonor bloodDonor = null;
        try {
            bloodDonor = new ObjectMapper().readValue(request, BloodDonor.class);
        } catch (JsonProcessingException e) {
            throw new ServiceException(ErrorResponseDTO
                    .builder()
                    .developerMessage(ExceptionUtils.getRootCauseMessage(e))
                    .userMessage("Exception comes while mapping blood donor json request to object.")
                    .statusCode(500)
                    .build());
        }

        try {
            bloodDonor.setImage(profileImage.getBytes());
        } catch (IOException e) {
            throw new ServiceException(ErrorResponseDTO
                    .builder()
                    .developerMessage(ExceptionUtils.getRootCauseMessage(e))
                    .userMessage("Exception comes while getting donor image's byte[] content")
                    .statusCode(500)
                    .build());
        }
        return bloodDonorRepository.save(bloodDonor);
    }
}
