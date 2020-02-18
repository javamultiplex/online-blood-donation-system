package com.javamultiplex.resource;

import com.javamultiplex.entity.Country;
import com.javamultiplex.entity.State;
import com.javamultiplex.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class StateResource {

    private final StateService stateService;

    @Autowired
    public StateResource(StateService stateService) {
        this.stateService = stateService;
    }

    @PostMapping("/country/{countryId}/state")
    public ResponseEntity<Country> save(@PathVariable Long countryId, @Valid @RequestBody State state) {
        Country body = stateService.save(countryId, state);
        return new ResponseEntity<>(body, HttpStatus.CREATED);
    }

    @GetMapping("/country/{countryId}/state/{stateId}")
    public ResponseEntity<State> get(@PathVariable Long countryId, @PathVariable Long stateId) {
        State body = stateService.get(countryId, stateId);
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

    @GetMapping("/country/{countryId}/state")
    public ResponseEntity<List<State>> get(@PathVariable Long countryId) {
        List<State> body = stateService.get(countryId);
        HttpStatus httpStatus = HttpStatus.OK;
        if (CollectionUtils.isEmpty(body)) {
            httpStatus = HttpStatus.NO_CONTENT;
        }
        return new ResponseEntity<>(body, httpStatus);
    }

    @DeleteMapping("/country/{countryId}/state/{stateId}")
    public ResponseEntity<Country> delete(@PathVariable Long countryId, @PathVariable Long stateId) {
        Country body = stateService.delete(countryId, stateId);
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

    @PutMapping("/country/{countryId}/state/{stateId}")
    public ResponseEntity<Country> update(@PathVariable Long countryId, @PathVariable Long stateId,
                                          @Valid @RequestBody State state) {
        Country body = stateService.update(countryId, stateId, state);
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

}