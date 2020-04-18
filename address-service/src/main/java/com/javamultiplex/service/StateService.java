package com.javamultiplex.service;

import com.javamultiplex.dto.ErrorResponseDTO;
import com.javamultiplex.entity.City;
import com.javamultiplex.entity.Country;
import com.javamultiplex.entity.State;
import com.javamultiplex.error.ServiceException;
import com.javamultiplex.model.CountryDTO;
import com.javamultiplex.model.StateDTO;
import com.javamultiplex.model.StateList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class StateService {

    private final CountryService countryService;

    @Autowired
    public StateService(CountryService countryService) {
        this.countryService = countryService;
    }

    /**
     * @param countryId
     * @param state
     * @return
     */
    public StateDTO save(Long countryId, State state) {
        Country country = countryService.get(countryId);
        Set<State> states = country.getStates();
        String stateName = state.getName();
        Optional<State> optionalState = states.stream()
                .filter(s -> state.getName().equalsIgnoreCase(s.getName()))
                .findAny();
        if (optionalState.isPresent()) {
            String message = "State " + stateName + " already exists in Country " + country.getName();
            ErrorResponseDTO errorResponse = ErrorResponseDTO
                    .builder()
                    .statusCode(400)
                    .developerMessage(message)
                    .userMessage(message)
                    .build();
            throw new ServiceException(errorResponse);
        }
        Country response = countryService.saveState(country, state);
        State expectedState = response
                .getStates()
                .stream()
                .filter(s -> s.getName().equalsIgnoreCase(state.getName()))
                .findFirst().get();
        CountryDTO countryDTO=new CountryDTO(countryId, response.getName());
        return new StateDTO(expectedState.getId(), expectedState.getName(), countryDTO);
    }

    public Country saveCity(State state, City city) {
        city.setName(StringUtils.capitalize(city.getName().toLowerCase()));
        state.addCity(city);
        Country country = state.getCountry();
        return countryService.saveState(country, state);
    }

    /**
     * @param countryId
     * @param stateId
     * @return
     */
    public State get(Long countryId, Long stateId) {
        Country country = countryService.get(countryId);
        Set<State> states = country.getStates();
        Optional<State> optionalState = states
                .stream()
                .filter(state -> state.getId().equals(stateId))
                .findAny();
        State state;
        if (optionalState.isPresent()) {
            state = optionalState.get();
        } else {
            String message = "State [id=" + stateId + "] not found in country " + country.getName();
            ErrorResponseDTO errorResponse = ErrorResponseDTO
                    .builder()
                    .statusCode(404)
                    .developerMessage(message)
                    .userMessage(message)
                    .build();
            throw new ServiceException(errorResponse);
        }
        return state;
    }

    /**
     * @param countryId
     * @return
     */
    public StateList get(Long countryId) {
        Country country = countryService.get(countryId);
        List<StateDTO> states = country
                .getStates()
                .stream()
                .map(state -> new StateDTO(state.getId(), state.getName()))
                .collect(Collectors.toList());
        return new StateList(states, new CountryDTO(countryId, country.getName()));
    }

    /**
     * @param countryId
     * @param stateId
     * @return
     */
    public StateDTO delete(Long countryId, Long stateId) {
        State state = get(countryId, stateId);
        countryService.delete(state);
        return new StateDTO(stateId, state.getName());
    }

    public Country delete(City city) {
        State state = city.getState();
        state.removeCity(city);
        Country country = state.getCountry();
        return countryService.saveState(country, state);
    }

    /**
     * @param countryId
     * @param stateId
     * @param updatedState
     * @return
     */
    public Country update(Long countryId, Long stateId, State updatedState) {
        State state = get(countryId, stateId);
        state.setName(updatedState.getName());
        Country country = state.getCountry();
        return countryService.saveState(country, state);
    }
}
