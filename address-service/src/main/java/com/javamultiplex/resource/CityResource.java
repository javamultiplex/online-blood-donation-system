package com.javamultiplex.resource;

import com.javamultiplex.entity.City;
import com.javamultiplex.entity.Country;
import com.javamultiplex.model.CityDTO;
import com.javamultiplex.model.CityList;
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
@CrossOrigin(origins = "*")
public class CityResource {

    private final CityService cityService;

    @Autowired
    public CityResource(CityService cityService) {
        this.cityService = cityService;
    }

    @PostMapping("/country/{countryId}/state/{stateId}/city")
    public ResponseEntity<CityDTO> save(@PathVariable Long countryId,
                                        @PathVariable Long stateId,
                                        @RequestBody City city) {

        CityDTO body = cityService.save(countryId, stateId, city);
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
    public CityList get(@PathVariable Long countryId,
                                        @PathVariable Long stateId) {

        return cityService.get(countryId, stateId);
    }

    @DeleteMapping("/country/{countryId}/state/{stateId}/city/{cityId}")
    public CityDTO delete(@PathVariable Long countryId,
                                          @PathVariable Long stateId,
                                          @PathVariable Long cityId) {

        return cityService.delete(countryId, stateId, cityId);
    }

}
