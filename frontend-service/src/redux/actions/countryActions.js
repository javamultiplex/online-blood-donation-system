import * as types from './index';

export const addCountry = (country) => {
    return {
        type: types.ADD_COUNTRY,
        payload: country
    }
}

export const addCountrySuccess = (response) => {
    return {
        type: types.ADD_COUNTRY_SUCCESS,
        payload: response
    }
}

export const addCountryError = (error) => {
    return {
        type: types.ADD_COUNTRY_ERROR,
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

export const viewCountry = () => {
    return {
        type: types.VIEW_COUNTRY
    }
}

export const viewCountrySuccess = (response) => {
    return {
        type: types.VIEW_COUNTRY_SUCCESS,
        payload: response
    }
}

export const viewCountryError = (error) => {
    return {
        type: types.VIEW_COUNTRY_ERROR,
        payload: error
    }
}