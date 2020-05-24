import * as types from './index'

export const bloodDonorSearch = (pincode, bloodGroup) => {
    return {
        type: types.BLOOD_DONOR_SEARCH,
        pincode: pincode,
        bloodGroup: bloodGroup
    }
}

export const bloodDonorSearchSuccess = (response) => {
    return {
        type: types.BLOOD_DONOR_SEARCH_SUCCESS,
        payload: response
    }
}

export const bloodDonorSearchError = (error) => {
    return {
        type: types.BLOOD_DONOR_SEARCH_ERROR,
        payload: error
    }
}

