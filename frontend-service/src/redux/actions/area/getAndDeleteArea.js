import * as types from './index';

export const deleteArea = (countryId, stateId, cityId, areaId) => {
    return {
        type: types.DELETE_AREA,
        countryId: countryId,
        stateId: stateId,
        cityId: cityId,
        areaId: areaId
    }
}

export const deleteAreaSuccess = (response) => {
    return {
        type: types.DELETE_AREA_SUCCESS,
        payload: response
    }
}

export const deleteAreaError = (error) => {
    return {
        type: types.DELETE_AREA_ERROR,
        payload: error
    }
}

export const getAllAreas = (countryId, stateId, cityId) => {
    return {
        type: types.GET_ALL_AREAS,
        countryId: countryId,
        stateId: stateId,
        cityId: cityId
    }
}

export const getAllAreasSuccess = (response) => {
    return {
        type: types.GET_ALL_AREAS_SUCCESS,
        payload: response
    }
}

export const getAllAreasError = (error) => {
    return {
        type: types.GET_ALL_AREAS_ERROR,
        payload: error
    }
}