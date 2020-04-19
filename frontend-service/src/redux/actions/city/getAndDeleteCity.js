import * as types from './index';

export const getAllCities = (countryId, stateId) => {
    return {
        type: types.GET_ALL_CITIES,
        countryId: countryId,
        stateId: stateId
    }
}

export const getAllCitiesSuccess = (response) => {
    return {
        type: types.GET_ALL_CITIES_SUCCESS,
        payload: response
    }
}

export const getAllCitiesError = (error) => {
    return {
        type: types.GET_ALL_CITIES_ERROR,
        paylaod: error
    }
}

export const deleteCity = (countryId, stateId, cityId) => {
    return {
        type: types.DELETE_CITY,
        countryId: countryId,
        stateId: stateId,
        cityId: cityId
    }
}

export const deleteCitySuccess = (response) => {
    return {
        type: types.DELETE_CITY_SUCCESS,
        payload: response
    }
}

export const deleteCityError = (error) => {
    return {
        type: types.DELETE_CITY_ERROR,
        payload: error
    }
}