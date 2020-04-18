import * as types from './index';

export const deleteState = (countryId, stateId) => {
    return {
        type: types.DELETE_STATE,
        countryId: countryId,
        stateId: stateId
    }
}

export const deleteStateSuccess = (response) => {
    return {
        type: types.DELETE_STATE_SUCCESS,
        payload: response
    }
}

export const deleteStateError = (error) => {
    return {
        type: types.DELETE_STATE_ERROR,
        payload: error
    }
}

export const getAllStates = (countryId) => {
    return {
        type: types.GET_ALL_STATES,
        countryId: countryId
    }
}

export const getAllStatesSuccess = (response) => {
    return {
        type: types.GET_ALL_STATES_SUCCESS,
        payload: response
    }
}

export const getAllStatesError = (error) => {
    return {
        type: types.GET_ALL_STATES_ERROR,
        payload: error
    }
}