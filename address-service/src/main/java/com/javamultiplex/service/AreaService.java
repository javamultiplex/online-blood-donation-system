package com.javamultiplex.service;

import com.javamultiplex.dto.ErrorResponseDTO;
import com.javamultiplex.entity.Area;
import com.javamultiplex.entity.City;
import com.javamultiplex.entity.Country;
import com.javamultiplex.entity.State;
import com.javamultiplex.error.ServiceException;
import com.javamultiplex.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

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
    public AreaDTO save(Long countryId, Long stateId, Long cityId, Area area) {
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
        Country country = cityService.saveArea(city, area);
        CountryDTO countryDTO = new CountryDTO(countryId, country.getName());
        State state = city.getState();
        StateDTO stateDTO=new StateDTO(stateId, state.getName(), countryDTO);
        CityDTO cityDTO=new CityDTO(cityId, city.getName(),stateDTO);
        Area expectedArea = city
                .getAreas()
                .stream()
                .filter(a -> area.getName().equalsIgnoreCase(a.getName()))
                .findAny()
                .get();
        return new AreaDTO(expectedArea.getId(), expectedArea.getName(), cityDTO);
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
    public AreaList get(Long countryId, Long stateId, Long cityId) {
        City city = cityService.get(countryId, stateId, cityId);
        List<AreaDTO> areas = city
                .getAreas()
                .stream()
                .map(area -> new AreaDTO(area.getId(), area.getName()))
                .collect(Collectors.toList());
        State state = city.getState();
        Country country = state.getCountry();
        CountryDTO countryDTO=new CountryDTO(countryId, country.getName());
        StateDTO stateDTO=new StateDTO(stateId, state.getName(), countryDTO);
        CityDTO cityDTO=new CityDTO(cityId, city.getName(),stateDTO);
        return new AreaList(areas, cityDTO);
    }


    /**
     * @param countryId
     * @param stateId
     * @param cityId
     * @param areaId
     * @return
     */
    public AreaDTO delete(Long countryId, Long stateId, Long cityId, Long areaId) {
        Area area = get(countryId, stateId, cityId, areaId);
        cityService.delete(area);
        return new AreaDTO(areaId, area.getName());
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
