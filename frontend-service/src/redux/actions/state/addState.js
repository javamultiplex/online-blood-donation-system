import * as types from './index';

export const addState = (countryId, state) => {
    return {
        type: types.ADD_STATE,
        countryId: countryId,
        state: state
    }
}

export const addStateSuccess = (response) => {
    return {
        type: types.ADD_STATE_SUCCESS,
        payload: response
    }
}

export const addStateError = (error) => {
    return {
        type: types.ADD_STATE_ERROR,
        payload: error
    }
}