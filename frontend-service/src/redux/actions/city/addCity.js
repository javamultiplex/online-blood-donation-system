import * as types from './index';

export const addCity = (countryId, stateId, city) => {
    return {
        type: types.ADD_CITY,
        countryId: countryId,
        stateId: stateId,
        city: city
    }
}

export const addCitySuccess = (response) => {
    return {
        type: types.ADD_CITY_SUCCESS,
        payload: response
    }
}

export const addCityError = (error) => {
    return {
        type: types.ADD_CITY_ERROR,
        payload: error
    }
}