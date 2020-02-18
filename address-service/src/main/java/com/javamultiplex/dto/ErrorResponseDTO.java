package com.javamultiplex.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.Singular;

import java.io.Serializable;
import java.util.List;

@Builder
@Getter
@Setter
public class ErrorResponseDTO implements Serializable {
    private static final long serialVersionUID = -1304116078021416532L;
    private String trackingId;
    private int statusCode;
    @Singular
    private List<String> userMessages;
    @Singular
    private List<String> developerMessages;
}
