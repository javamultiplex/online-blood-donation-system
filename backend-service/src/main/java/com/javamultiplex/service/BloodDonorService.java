package com.javamultiplex.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.javamultiplex.dto.ErrorResponseDTO;
import com.javamultiplex.entity.BloodDonor;
import com.javamultiplex.enums.Status;
import com.javamultiplex.error.ServiceException;
import com.javamultiplex.mapper.BloodDonorObjectMapper;
import com.javamultiplex.model.BloodDonorDTO;
import com.javamultiplex.repository.BloodDonorRepository;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

/**
 * @author Rohit Agarwal on 26/04/20 10:02 pm
 * @copyright www.javamultiplex.com
 */
@Service
public class BloodDonorService {

    private final BloodDonorRepository bloodDonorRepository;
    private final BloodDonorObjectMapper bloodDonorObjectMapper;

    @Autowired
    public BloodDonorService(BloodDonorRepository bloodDonorRepository, BloodDonorObjectMapper bloodDonorObjectMapper) {
        this.bloodDonorRepository = bloodDonorRepository;
        this.bloodDonorObjectMapper = bloodDonorObjectMapper;
    }

    /**
     *
     * @param request
     * @param profileImage
     * @return
     */
    public BloodDonor register(String request, MultipartFile profileImage) {
        System.out.println("Request is : " + request);
        BloodDonorDTO bloodDonorDTO = null;
        try {
            bloodDonorDTO = new ObjectMapper().readValue(request, BloodDonorDTO.class);
        } catch (JsonProcessingException e) {
            throw new ServiceException(ErrorResponseDTO
                    .builder()
                    .developerMessage(ExceptionUtils.getRootCauseMessage(e))
                    .userMessage("Exception comes while mapping blood donor json request to object.")
                    .statusCode(500)
                    .build());
        }
        BloodDonor bloodDonor = bloodDonorObjectMapper.map(bloodDonorDTO);
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

    /**
     *
     * @param zip
     * @param bloodGroup
     * @return
     */
    public List<BloodDonor> search(String zip, String bloodGroup){
        try {
            bloodGroup = URLDecoder.decode(bloodGroup, StandardCharsets.UTF_8.name());
        }catch (UnsupportedEncodingException e){
            throw new ServiceException(ErrorResponseDTO
                    .builder()
                    .statusCode(500)
                    .developerMessage(ExceptionUtils.getRootCauseMessage(e))
                    .userMessage("Exception comes while decoding request parameter (blood group)")
                    .build());
        }
        return bloodDonorRepository.findByAddressZipAndBloodGroupAndStatus(zip,bloodGroup, Status.ACTIVE);
    }
}
