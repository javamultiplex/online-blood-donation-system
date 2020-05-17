package com.javamultiplex.error;

/**
 * @author Rohit Agarwal on 17/05/20 8:30 pm
 * @copyright www.javamultiplex.com
 */
public class RestTemplateClientException extends RuntimeException {
    private static final long serialVersionUID = 8375553457635893567L;

    public RestTemplateClientException(String message) {
        super(message);
    }
}
