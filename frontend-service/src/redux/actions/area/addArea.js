import * as types from './index';

export const addArea = (countryId, stateId, cityId, area) => {
    return {
        type: types.ADD_AREA,
        countryId: countryId,
        stateId: stateId,
        cityId: cityId,
        area: area
    }
}

export const addAreaSuccess = (response) => {
    return {
        type: types.ADD_AREA_SUCCESS,
        payload: response
    }
}

export const addAreaError = (error) => {
    return {
        types: types.ADD_AREA_ERROR,
        payload: error
    }
}