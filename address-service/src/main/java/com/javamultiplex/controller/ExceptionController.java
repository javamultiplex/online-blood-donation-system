package com.javamultiplex.controller;

import com.javamultiplex.dto.ErrorResponseDTO;
import com.javamultiplex.error.ServiceException;
import com.javamultiplex.constant.AppConstants;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.MDC;
import org.springframework.beans.TypeMismatchException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.List;

@RestControllerAdvice
@Slf4j
public class ExceptionController extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleTypeMismatch(TypeMismatchException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        MethodArgumentTypeMismatchException methodArgumentTypeMismatchException = (MethodArgumentTypeMismatchException) ex;
        String parameterName = methodArgumentTypeMismatchException.getName();
        Class<?> requiredType = ex.getRequiredType();
        String userMessage = "Method Argument " + parameterName + " should be of type " + requiredType;
        String developerMessage = ex.getMessage();
        String trackingId = MDC.get(AppConstants.TRACKING_ID);
        ErrorResponseDTO errorResponse = ErrorResponseDTO
                .builder()
                .statusCode(400)
                .trackingId(trackingId)
                .userMessage(userMessage)
                .developerMessage(developerMessage)
                .build();
        log.error("Exception occurred : ", ex);
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }


    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String trackingId = MDC.get(AppConstants.TRACKING_ID);
        List<String> userMessages = new ArrayList<>();
        List<String> developerMessages = new ArrayList<>();
        ex.getBindingResult()
                .getFieldErrors()
                .forEach(objectError -> {
                    userMessages.add(objectError.getDefaultMessage());
                    developerMessages.add("User entered value : " + objectError.getRejectedValue() + " is rejected because it is not satisfying required validation constraint.");
                });
        ErrorResponseDTO errorResponse = ErrorResponseDTO
                .builder()
                .statusCode(400)
                .trackingId(trackingId)
                .userMessages(userMessages)
                .developerMessages(developerMessages)
                .build();
        log.error("Exception occurred : ", ex);
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ServiceException.class)
    protected ResponseEntity<ErrorResponseDTO> handleServiceException(ServiceException ex) {
        String trackingId = MDC.get(AppConstants.TRACKING_ID);
        ErrorResponseDTO errorResponse = ex.getErrorResponseDTO();
        errorResponse.setTrackingId(trackingId);
        log.error("Exception occurred : ", ex);
        return new ResponseEntity<>(errorResponse, HttpStatus.valueOf(errorResponse.getStatusCode()));
    }
}
