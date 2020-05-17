import * as types from './index'

export const bloodDonorRegister = (image, request) => {
    return {
        type: types.BLOOD_DONOR_REGISTER,
        image: image,
        payload: request
    }
}

export const bloodDonorRegisterSuccess = (response) => {
    return {
        type: types.BLOOD_DONOR_REGISTER_SUCCESS,
        payload: response
    }
}

export const bloodDonorRegisterError = (error) => {
    return {
        type: types.BLOOD_DONOR_REGISTER_ERROR,
        payload: error
    }
}

