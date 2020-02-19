package com.javamultiplex.service;

import com.javamultiplex.dto.ErrorResponseDTO;
import com.javamultiplex.entity.Area;
import com.javamultiplex.entity.City;
import com.javamultiplex.entity.Country;
import com.javamultiplex.entity.State;
import com.javamultiplex.error.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CityService {

    private final StateService stateService;

    @Autowired
    public CityService(StateService stateService) {
        this.stateService = stateService;
    }

    /**
     * @param countryId
     * @param stateId
     * @param city
     * @return
     */
    public Country save(Long countryId, Long stateId, City city) {
        State state = stateService.get(countryId, stateId);
        Set<City> cities = state.getCities();
        String cityName = city.getName();
        Optional<City> optionalCities = cities.stream()
                .filter(c -> cityName.equalsIgnoreCase(c.getName()))
                .findAny();
        if (optionalCities.isPresent()) {
            String message = "City " + cityName + " already exists in State " + state.getName();
            ErrorResponseDTO errorResponse = ErrorResponseDTO
                    .builder()
                    .statusCode(400)
                    .developerMessage(message)
                    .userMessage(message)
                    .build();
            throw new ServiceException(errorResponse);
        }
        return stateService.saveCity(state, city);
    }

    /**
     * @param city
     * @param area
     * @return
     */
    public Country saveArea(City city, Area area) {
        area.setName(StringUtils.capitalize(area.getName().toLowerCase()));
        city.addArea(area);
        State state = city.getState();
        return stateService.saveCity(state, city);
    }

    /**
     * @param countryId
     * @param stateId
     * @param cityId
     * @return
     */
    public City get(Long countryId, Long stateId, Long cityId) {
        State state = stateService.get(countryId, stateId);
        Set<City> cities = state.getCities();
        Optional<City> optionalCities = cities
                .stream()
                .filter(city -> cityId.equals(city.getId()))
                .findAny();
        City city;
        if (optionalCities.isPresent()) {
            city = optionalCities.get();
        } else {
            String message = "City [id=" + cityId + "] not found in country " + state.getCountry().getName() + " and state " + state.getName();
            ErrorResponseDTO errorResponse = ErrorResponseDTO
                    .builder()
                    .statusCode(404)
                    .developerMessage(message)
                    .userMessage(message)
                    .build();
            throw new ServiceException(errorResponse);
        }
        return city;
    }

    /**
     * @param countryId
     * @param stateId
     * @return
     */
    public List<City> get(Long countryId, Long stateId) {
        State state = stateService.get(countryId, stateId);
        return new ArrayList<>(state.getCities());
    }

    /**
     * @param countryId
     * @param stateId
     * @param cityId
     * @return
     */
    public Country delete(Long countryId, Long stateId, Long cityId) {
        City city = get(countryId, stateId, cityId);
        return stateService.delete(city);
    }

    /**
     * @param area
     * @return
     */
    public Country delete(Area area) {
        City city = area.getCity();
        city.removeArea(area);
        State state = city.getState();
        return stateService.saveCity(state, city);
    }

    /**
     * @param countryId
     * @param stateId
     * @param cityId
     * @param updateCity
     * @return
     */
    public Country update(Long countryId, Long stateId, Long cityId, City updateCity) {
        City city = get(countryId, stateId, cityId);
        city.setName(updateCity.getName());
        State state = city.getState();
        return stateService.saveCity(state, city);
    }
}
