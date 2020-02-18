package com.javamultiplex.resource;

import com.javamultiplex.entity.City;
import com.javamultiplex.entity.Country;
import com.javamultiplex.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class CityResource {

    private final CityService cityService;

    @Autowired
    public CityResource(CityService cityService) {
        this.cityService = cityService;
    }

    @PostMapping("/country/{countryId}/state/{stateId}/city")
    public ResponseEntity<Country> save(@PathVariable Long countryId,
                                        @PathVariable Long stateId,
                                        @RequestBody City city) {

        Country body = cityService.save(countryId, stateId, city);
        return new ResponseEntity<>(body, HttpStatus.CREATED);
    }

    @GetMapping("/country/{countryId}/state/{stateId}/city/{cityId}")
    public ResponseEntity<City> get(@PathVariable Long countryId,
                                    @PathVariable Long stateId,
                                    @PathVariable Long cityId) {

        City body = cityService.get(countryId, stateId, cityId);
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

    @GetMapping("/country/{countryId}/state/{stateId}/city")
    public ResponseEntity<List<City>> get(@PathVariable Long countryId,
                                          @PathVariable Long stateId) {

        List<City> body = cityService.get(countryId, stateId);
        HttpStatus httpStatus = HttpStatus.OK;
        if (CollectionUtils.isEmpty(body)) {
            httpStatus = HttpStatus.NO_CONTENT;
        }
        return new ResponseEntity<>(body, httpStatus);
    }

    @DeleteMapping("/country/{countryId}/state/{stateId}/city/{cityId}")
    public ResponseEntity<Country> delete(@PathVariable Long countryId,
                                          @PathVariable Long stateId,
                                          @PathVariable Long cityId) {

        Country body = cityService.delete(countryId, stateId, cityId);
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

    @PutMapping("/country/{countryId}/state/{stateId}/city/{cityId}")
    public ResponseEntity<Country> update(@PathVariable Long countryId,
                                          @PathVariable Long stateId,
                                          @PathVariable Long cityId,
                                          @Valid @RequestBody City city) {

        Country body = cityService.update(countryId, stateId, cityId, city);
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

}
