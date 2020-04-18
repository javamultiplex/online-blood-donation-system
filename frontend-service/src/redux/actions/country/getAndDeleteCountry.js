import * as types from './index';

export const getAllCountries = () => {
    return {
        type: types.GET_ALL_COUNTRIES
    }
}

export const getAllCountriesSuccess = (response) => {
    return {
        type: types.GET_ALL_COUNTRIES_SUCCESS,
        payload: response
    }
}

export const getAllCountriesyError = (error) => {
    return {
        type: types.GET_ALL_COUNTRIES_ERROR,
        payload: error
    }
}

export const deleteCountry = (countryId) => {
    return {
        type: types.DELETE_COUNTRY,
        payload: countryId
    }
}

export const deleteCountrySuccess = (response) => {
    return {
        type: types.DELETE_COUNTRY_SUCCESS,
        payload: response
    }
}

export const deleteCountryError = (error) => {
    return {
        type: types.DELETE_COUNTRY_ERROR,
        payload: error
    }
}