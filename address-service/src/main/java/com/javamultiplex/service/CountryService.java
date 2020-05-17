package com.javamultiplex.service;

import com.javamultiplex.dto.ErrorResponseDTO;
import com.javamultiplex.entity.Country;
import com.javamultiplex.entity.State;
import com.javamultiplex.error.ServiceException;
import com.javamultiplex.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {
    private final CountryRepository countryRepository;

    @Autowired
    public CountryService(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    /**
     * @param country
     * @return
     */
    public Country save(Country country) {
        String countryName = country.getName();
        Optional<Country> optionalCountry = countryRepository.findByName(countryName);
        if (optionalCountry.isPresent()) {
            String message = "Country " + countryName + " already exist.";
            ErrorResponseDTO errorResponse = ErrorResponseDTO
                    .builder()
                    .statusCode(400)
                    .developerMessage(message)
                    .userMessage(message)
                    .build();
            throw new ServiceException(errorResponse);
        }
        country.setName(StringUtils.capitalize(countryName.toLowerCase()));
        return countryRepository.save(country);
    }

    /**
     * @param country
     * @param state
     * @return
     */
    public Country saveState(Country country, State state) {
        state.setName(StringUtils.capitalize(state.getName().toLowerCase()));
        country.addState(state);
        return countryRepository.save(country);
    }

    /**
     * @return
     */
    public List<Country> get() {
        return countryRepository.findAll();
    }

    /**
     * @param countryId
     * @return
     */
    public Country get(Long countryId) {
        Optional<Country> optionalCountry = countryRepository.findById(countryId);
        Country country;
        if (optionalCountry.isPresent()) {
            country = optionalCountry.get();
        } else {
            String message = "Country[id=" + countryId + "] not found.";
            ErrorResponseDTO errorResponse = ErrorResponseDTO
                    .builder()
                    .statusCode(404)
                    .developerMessage(message)
                    .userMessage(message)
                    .build();
            throw new ServiceException(errorResponse);
        }
        return country;
    }

    /**
     * @param countryId
     * @return
     */
    public Country delete(Long countryId) {
        Country country = get(countryId);
        countryRepository.delete(country);
        return country;
    }

    /**
     * @param state
     * @return
     */
    public Country delete(State state) {
        Country country = state.getCountry();
        country.removeState(state);
        return countryRepository.save(country);
    }

}
