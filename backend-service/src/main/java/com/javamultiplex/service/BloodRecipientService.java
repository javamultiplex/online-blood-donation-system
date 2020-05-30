package com.javamultiplex.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.javamultiplex.dto.ErrorResponseDTO;
import com.javamultiplex.entity.BloodRecipient;
import com.javamultiplex.error.ServiceException;
import com.javamultiplex.mapper.BloodRecipientObjectMapper;
import com.javamultiplex.model.BloodRecipientDTO;
import com.javamultiplex.repository.BloodRecipientRepository;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @author Rohit Agarwal on 25/05/20 10:15 pm
 * @copyright www.javamultiplex.com
 */
@Service
public class BloodRecipientService {

    private final BloodRecipientRepository bloodRecipientRepository;
    private final BloodRecipientObjectMapper bloodRecipientObjectMapper;

    @Autowired
    public BloodRecipientService(BloodRecipientRepository bloodRecipientRepository,
                                 BloodRecipientObjectMapper bloodRecipientObjectMapper) {
        this.bloodRecipientRepository = bloodRecipientRepository;
        this.bloodRecipientObjectMapper = bloodRecipientObjectMapper;
    }

    /**
     * @param request
     * @param prescription
     * @return
     */
    public BloodRecipient register(String request, MultipartFile prescription) {
        System.out.println("Request is : " + request);
        BloodRecipientDTO bloodRecipientDTO = null;
        try {
            bloodRecipientDTO = new ObjectMapper().readValue(request, BloodRecipientDTO.class);
        } catch (JsonProcessingException e) {
            throw new ServiceException(ErrorResponseDTO
                    .builder()
                    .developerMessage(ExceptionUtils.getRootCauseMessage(e))
                    .userMessage("Exception comes while mapping blood recipient json request to object.")
                    .statusCode(500)
                    .build());
        }
        BloodRecipient bloodRecipient = bloodRecipientObjectMapper.map(bloodRecipientDTO);
        try {
            bloodRecipient.setPrescription(prescription.getBytes());
        } catch (IOException e) {
            throw new ServiceException(ErrorResponseDTO
                    .builder()
                    .developerMessage(ExceptionUtils.getRootCauseMessage(e))
                    .userMessage("Exception comes while getting recipient prescription's byte[] content")
                    .statusCode(500)
                    .build());
        }
        return bloodRecipientRepository.save(bloodRecipient);
    }
}
