package com.javamultiplex.service;

import com.javamultiplex.dto.ErrorResponseDTO;
import com.javamultiplex.entity.Area;
import com.javamultiplex.entity.City;
import com.javamultiplex.entity.Country;
import com.javamultiplex.entity.State;
import com.javamultiplex.error.ServiceException;
import com.javamultiplex.model.CityDTO;
import com.javamultiplex.model.CityList;
import com.javamultiplex.model.CountryDTO;
import com.javamultiplex.model.StateDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

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
    public CityDTO save(Long countryId, Long stateId, City city) {
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
        Country country = stateService.saveCity(state, city);
        CountryDTO countryDTO=new CountryDTO(countryId, country.getName());
        StateDTO stateDTO=new StateDTO(stateId, state.getName(), countryDTO);
        State expectedState = country
                .getStates()
                .stream()
                .filter(s -> s.getId().equals(stateId))
                .findAny()
                .get();
        City expectedCity = expectedState
                .getCities()
                .stream()
                .filter(c -> c.getName().equalsIgnoreCase(city.getName()))
                .findAny()
                .get();
        return new CityDTO(expectedCity.getId(), expectedCity.getName(), stateDTO);
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
    public CityList get(Long countryId, Long stateId) {
        State state = stateService.get(countryId, stateId);
        List<CityDTO> cities = state
                .getCities()
                .stream()
                .map(city -> new CityDTO(city.getId(), city.getName()))
                .collect(Collectors.toList());
        Country country = state.getCountry();
        StateDTO stateDTO=new StateDTO(state.getId(), state.getName(), new CountryDTO(countryId, country.getName()));
        return new CityList(cities, stateDTO);
    }

    /**
     * @param countryId
     * @param stateId
     * @param cityId
     * @return
     */
    public CityDTO delete(Long countryId, Long stateId, Long cityId) {
        City city = get(countryId, stateId, cityId);
        stateService.delete(city);
        return new CityDTO(cityId, city.getName());
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
