import * as types from './index';

export const bloodDonorDetail = (id) => {
    return {
        type: types.BLOOD_DONOR_DETAIL,
        id: id
    }
}

export const bloodDonorDetailTrigger = () => {
    return {
        type: types.BLOOD_DONOR_DETAIL_TRIGGER
    }
}

export const bloodDonorDetailSuccess = (response) => {
    return {
        type: types.BLOOD_DONOR_DETAIL_SUCCESS,
        payload: response
    }
}

export const bloodDonorDetailError = (error) => {
    return {
        type: types.BLOOD_DONOR_DETAIL_ERROR,
        payload: error
    }
}

export const bloodDonorUpdateStatus = (id,status) => {
    return {
        type: types.BLOOD_DONOR_UPDATE_STATUS,
        id: id,
        status: status
    }
}

export const bloodDonorUpdateStatusSuccess = (response) => {
    return {
        type: types.BLOOD_DONOR_UPDATE_STATUS_SUCCESS,
        payload: response
    }
}

export const bloodDonorUpdateStatusError = (error) => {
    return {
        type: types.BLOOD_DONOR_UPDATE_STATUS_SUCCESS,
        payload: error
    }
}