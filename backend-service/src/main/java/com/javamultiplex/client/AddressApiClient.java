package com.javamultiplex.client;

import com.javamultiplex.error.RestTemplateClientException;
import com.javamultiplex.error.RestTemplateResponseErrorHandler;
import com.javamultiplex.model.AddressApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @author Rohit Agarwal on 17/05/20 8:19 pm
 * @copyright www.javamultiplex.com
 */
@Component
public class AddressApiClient {

    private final RestTemplate restTemplate;

    @Autowired
    public AddressApiClient(RestTemplateBuilder restTemplateBuilder,
                            RestTemplateResponseErrorHandler restTemplateResponseErrorHandler) {
        this.restTemplate = restTemplateBuilder.errorHandler(restTemplateResponseErrorHandler).build();
    }

    /**
     * @param countryId
     * @return
     */
    public String getCountryName(Long countryId) {
        String url = "http://localhost:9090/api/v1/country/{countryId}";
        Map<String, Long> map = new ConcurrentHashMap<>();
        map.put("countryId", countryId);
        ResponseEntity<AddressApiResponse> responseEntity = restTemplate.getForEntity(url, AddressApiResponse.class, map);
        AddressApiResponse body = responseEntity.getBody();
        if (body == null) {
            throw new RestTemplateClientException("Country  Api response is null");
        }
        return body.getName();
    }

    /**
     * @param countryId
     * @param stateId
     * @return
     */
    public String getStateName(Long countryId, Long stateId) {
        String url = "http://localhost:9090/api/v1/country/{countryId}/state/{stateId}";
        Map<String, Long> map = new ConcurrentHashMap<>();
        map.put("countryId", countryId);
        map.put("stateId", stateId);
        ResponseEntity<AddressApiResponse> responseEntity = restTemplate.getForEntity(url, AddressApiResponse.class, map);
        AddressApiResponse body = responseEntity.getBody();
        if (body == null) {
            throw new RestTemplateClientException("State Api response is null");
        }
        return body.getName();
    }

    /**
     * @param countryId
     * @param stateId
     * @param cityId
     * @return
     */
    public String getCityName(Long countryId, Long stateId, Long cityId) {
        String url = "http://localhost:9090/api/v1/country/{countryId}/state/{stateId}/city/{cityId}";
        Map<String, Long> map = new ConcurrentHashMap<>();
        map.put("countryId", countryId);
        map.put("stateId", stateId);
        map.put("cityId", cityId);
        ResponseEntity<AddressApiResponse> responseEntity = restTemplate.getForEntity(url, AddressApiResponse.class, map);
        AddressApiResponse body = responseEntity.getBody();
        if (body == null) {
            throw new RestTemplateClientException("City Api response is null");
        }
        return body.getName();
    }


    /**
     *
     * @param countryId
     * @param stateId
     * @param cityId
     * @param areaId
     * @return
     */
    public String getAreaName(Long countryId, Long stateId, Long cityId, Long areaId) {
        String url = "http://localhost:9090/api/v1/country/{countryId}/state/{stateId}/city/{cityId}/area/{areaId}";
        Map<String, Long> map = new ConcurrentHashMap<>();
        map.put("countryId", countryId);
        map.put("stateId", stateId);
        map.put("cityId", cityId);
        map.put("areaId",areaId);
        ResponseEntity<AddressApiResponse> responseEntity = restTemplate.getForEntity(url, AddressApiResponse.class, map);
        AddressApiResponse body = responseEntity.getBody();
        if (body == null) {
            throw new RestTemplateClientException("Area Api response is null");
        }
        return body.getName();
    }
}
