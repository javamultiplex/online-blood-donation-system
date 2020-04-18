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