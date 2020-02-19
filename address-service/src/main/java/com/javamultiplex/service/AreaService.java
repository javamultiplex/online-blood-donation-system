package com.javamultiplex.service;

import com.javamultiplex.dto.ErrorResponseDTO;
import com.javamultiplex.entity.Area;
import com.javamultiplex.entity.City;
import com.javamultiplex.entity.Country;
import com.javamultiplex.error.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class AreaService {

    private final CityService cityService;

    @Autowired
    public AreaService(CityService cityService) {
        this.cityService = cityService;
    }

    /**
     * @param countryId
     * @param stateId
     * @param cityId
     * @param area
     * @return
     */
    public Country save(Long countryId, Long stateId, Long cityId, Area area) {
        City city = cityService.get(countryId, stateId, cityId);
        Set<Area> areas = city.getAreas();
        String areaName = area.getName();
        Optional<Area> optionalArea = areas.stream()
                .filter(c -> areaName.equalsIgnoreCase(c.getName()))
                .findAny();
        if (optionalArea.isPresent()) {
            String message = "Area " + areaName + " already exists in City " + city.getName();
            ErrorResponseDTO errorResponse = ErrorResponseDTO
                    .builder()
                    .statusCode(400)
                    .developerMessage(message)
                    .userMessage(message)
                    .build();
            throw new ServiceException(errorResponse);
        }
        return cityService.saveArea(city, area);
    }

    /**
     * @param countryId
     * @param stateId
     * @param cityId
     * @param areaId
     * @return
     */
    public Area get(Long countryId, Long stateId, Long cityId, Long areaId) {
        City city = cityService.get(countryId, stateId, cityId);
        Set<Area> areas = city.getAreas();
        Optional<Area> optionalAreas = areas
                .stream()
                .filter(area -> areaId.equals(area.getId()))
                .findAny();
        Area area;
        if (optionalAreas.isPresent()) {
            area = optionalAreas.get();
        } else {
            String message = "Area [id=" + areaId + "] not found in country " + city.getState().getCountry().getName() + ",state " + city.getState().getName() + " and city " + city.getName();
            ErrorResponseDTO errorResponse = ErrorResponseDTO
                    .builder()
                    .statusCode(404)
                    .developerMessage(message)
                    .userMessage(message)
                    .build();
            throw new ServiceException(errorResponse);
        }
        return area;
    }

    /**
     * @param countryId
     * @param stateId
     * @return
     */
    public List<Area> get(Long countryId, Long stateId, Long cityId) {
        City city = cityService.get(countryId, stateId, cityId);
        return new ArrayList<>(city.getAreas());
    }


    /**
     * @param countryId
     * @param stateId
     * @param cityId
     * @param areaId
     * @return
     */
    public Country delete(Long countryId, Long stateId, Long cityId, Long areaId) {
        Area area = get(countryId, stateId, cityId, areaId);
        return cityService.delete(area);
    }

    /**
     * @param countryId
     * @param stateId
     * @param cityId
     * @param areaId
     * @param updateArea
     * @return
     */
    public Country update(Long countryId, Long stateId, Long cityId, Long areaId, Area updateArea) {
        Area area = get(countryId, stateId, cityId, areaId);
        area.setName(updateArea.getName());
        City city = area.getCity();
        return cityService.saveArea(city, area);
    }
}
