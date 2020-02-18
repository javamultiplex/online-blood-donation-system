package com.javamultiplex.error;

import com.javamultiplex.dto.ErrorResponseDTO;
import lombok.Getter;

@Getter
public class ServiceException extends RuntimeException {
    private final ErrorResponseDTO errorResponseDTO;

    public ServiceException(ErrorResponseDTO errorResponseDTO) {
        this.errorResponseDTO = errorResponseDTO;
    }
}
