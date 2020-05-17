package com.javamultiplex.resource;

import com.javamultiplex.entity.Area;
import com.javamultiplex.entity.Country;
import com.javamultiplex.model.AreaDTO;
import com.javamultiplex.model.AreaList;
import com.javamultiplex.service.AreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class AreaResource {

    private final AreaService areaService;

    @Autowired
    public AreaResource(AreaService areaService) {
        this.areaService = areaService;
    }

    @PostMapping("/country/{countryId}/state/{stateId}/city/{cityId}/area")
    public ResponseEntity<AreaDTO> save(@PathVariable Long countryId,
                                        @PathVariable Long stateId,
                                        @PathVariable Long cityId,
                                        @RequestBody Area area) {

        AreaDTO body = areaService.save(countryId, stateId, cityId, area);
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
    public AreaList get(@PathVariable Long countryId,
                        @PathVariable Long stateId,
                        @PathVariable Long cityId) {

        return areaService.get(countryId, stateId, cityId);
    }

    @DeleteMapping("/country/{countryId}/state/{stateId}/city/{cityId}/area/{areaId}")
    public AreaDTO delete(@PathVariable Long countryId,
                                          @PathVariable Long stateId,
                                          @PathVariable Long cityId,
                                          @PathVariable Long areaId) {

        return areaService.delete(countryId, stateId, cityId, areaId);

    }

}
