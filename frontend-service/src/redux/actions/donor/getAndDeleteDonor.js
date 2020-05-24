import * as types from './index';

export const bloodDonorActiveFindAll = () => {
    return {
        type: types.BLOOD_DONOR_ACTIVE_FIND_ALL
    }
}

export const bloodDonorActiveFindAllSuccess = (response) => {
    return {
        type: types.BLOOD_DONOR_ACTIVE_FIND_ALL_SUCCESS,
        payload: response
    }
}

export const bloodDonorActiveFindAllError = (error) => {
    return {
        type: types.BLOOD_DONOR_ACTIVE_FIND_ALL_ERROR,
        payload: error
    }
}

export const bloodDonorInActiveFindAll = () => {
    return {
        type: types.BLOOD_DONOR_INACTIVE_FIND_ALL
    }
}

export const bloodDonorInActiveFindAllSuccess = (response) => {
    return {
        type: types.BLOOD_DONOR_INACTIVE_FIND_ALL_SUCCESS,
        payload: response
    }
}

export const bloodDonorInActiveFindAllError = (error) => {
    return {
        type: types.BLOOD_DONOR_INACTIVE_FIND_ALL_ERROR,
        payload: error
    }
}