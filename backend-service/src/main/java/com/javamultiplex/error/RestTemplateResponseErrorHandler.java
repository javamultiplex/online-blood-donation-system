package com.javamultiplex.error;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.javamultiplex.dto.ErrorResponseDTO;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.client.ResponseErrorHandler;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * @author Rohit Agarwal on 17/05/20 8:22 pm
 * @copyright www.javamultiplex.com
 */
@Component
@Slf4j
public class RestTemplateResponseErrorHandler implements ResponseErrorHandler {
    @Override
    public boolean hasError(ClientHttpResponse httpResponse) throws IOException {
        return httpResponse.getStatusCode().series() == HttpStatus.Series.CLIENT_ERROR ||
                httpResponse.getStatusCode().series() == HttpStatus.Series.SERVER_ERROR;
    }

    @Override
    public void handleError(ClientHttpResponse httpResponse) throws IOException {
        if (httpResponse.getStatusCode().series() == HttpStatus.Series.SERVER_ERROR ||
                httpResponse.getStatusCode().series() == HttpStatus.Series.CLIENT_ERROR) {
            String body = IOUtils.toString(new BufferedReader(new InputStreamReader(httpResponse.getBody())));
            ErrorResponseDTO errorResponseDTO = new ObjectMapper().readValue(body, ErrorResponseDTO.class);
            log.error("Response received : {} ",errorResponseDTO);
            throw new RestTemplateClientException(errorResponseDTO.getDeveloperMessages().get(0));
        }
    }
}
