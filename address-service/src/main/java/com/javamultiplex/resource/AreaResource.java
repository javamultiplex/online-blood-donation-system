package com.javamultiplex.resource;

import com.javamultiplex.entity.Area;
import com.javamultiplex.entity.Country;
import com.javamultiplex.service.AreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class AreaResource {

    private final AreaService areaService;

    @Autowired
    public AreaResource(AreaService areaService) {
        this.areaService = areaService;
    }

    @PostMapping("/country/{countryId}/state/{stateId}/city/{cityId}/area")
    public ResponseEntity<Country> save(@PathVariable Long countryId,
                                        @PathVariable Long stateId,
                                        @PathVariable Long cityId,
                                        @RequestBody Area area) {

        Country body = areaService.save(countryId, stateId, cityId, area);
        return new ResponseEntity<>(body, HttpStatus.CREATED);
    }

    @GetMapping("/country/{countryId}/state/{stateId}/city/{cityId}/area/{areaId}")
    public ResponseEntity<Area> get(@PathVariable Long countryId,
                                    @PathVariable Long stateId,
                                    @PathVariable Long cityId,
                                    @PathVariable Long areaId) {

        Area body = areaService.get(countryId, stateId, cityId, areaId);
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

    @GetMapping("/country/{countryId}/state/{stateId}/city/{cityId}/area")
    public ResponseEntity<List<Area>> get(@PathVariable Long countryId,
                                          @PathVariable Long stateId,
                                          @PathVariable Long cityId) {

        List<Area> body = areaService.get(countryId, stateId, cityId);
        HttpStatus httpStatus = HttpStatus.OK;
        if (CollectionUtils.isEmpty(body)) {
            httpStatus = HttpStatus.NO_CONTENT;
        }
        return new ResponseEntity<>(body, httpStatus);
    }

    @DeleteMapping("/country/{countryId}/state/{stateId}/city/{cityId}/area/{areaId}")
    public ResponseEntity<Country> delete(@PathVariable Long countryId,
                                          @PathVariable Long stateId,
                                          @PathVariable Long cityId,
                                          @PathVariable Long areaId) {

        Country body = areaService.delete(countryId, stateId, cityId, areaId);
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

    @PutMapping("/country/{countryId}/state/{stateId}/city/{cityId}/area/{areaId}")
    public ResponseEntity<Country> update(@PathVariable Long countryId,
                                          @PathVariable Long stateId,
                                          @PathVariable Long cityId,
                                          @PathVariable Long areaId,
                                          @Valid @RequestBody Area area) {

        Country body = areaService.update(countryId, stateId, cityId, areaId, area);
        return new ResponseEntity<>(body, HttpStatus.OK);
    }

}
