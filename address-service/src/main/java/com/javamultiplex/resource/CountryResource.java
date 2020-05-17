package com.javamultiplex.resource;

import com.javamultiplex.entity.Country;
import com.javamultiplex.service.CountryService;
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
public class CountryResource {
    private final CountryService countryService;

    @Autowired
    public CountryResource(CountryService countryService) {
        this.countryService = countryService;
    }

    @PostMapping("/country")
    public ResponseEntity<Country> save(@Valid @RequestBody Country country) {
        Country body = countryService.save(country);
        return new ResponseEntity<>(body, HttpStatus.CREATED);
    }

    @GetMapping("/country")
    public ResponseEntity<List<Country>> get() {
        List<Country> body = countryService.get();
        HttpStatus httpStatus = HttpStatus.OK;
        if (CollectionUtils.isEmpty(body)) {
            httpStatus = HttpStatus.NO_CONTENT;
        }
        return new ResponseEntity<>(body, httpStatus);
    }

    @GetMapping("/country/{countryId}")
    public ResponseEntity<Country> get(@PathVariable Long countryId) {
        Country body = countryService.get(countryId);
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

    @DeleteMapping("/country/{countryId}")
    public ResponseEntity<Country> delete(@PathVariable Long countryId) {
        Country body = countryService.delete(countryId);
        return new ResponseEntity<>(body, HttpStatus.OK);
    }
}
