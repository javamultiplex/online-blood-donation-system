import * as types from './index'

export const bloodRecipientRegister = (prescription, request) => {
    return {
        type: types.BLOOD_RECIPIENT_REGISTER,
        prescription: prescription,
        payload: request
    }
}

export const bloodRecipientRegisterSuccess = (response) => {
    return {
        type: types.BLOOD_RECIPIENT_REGISTER_SUCCESS,
        payload: response
    }
}

export const bloodRecipientRegisterError = (error) => {
    return {
        type: types.BLOOD_RECIPIENT_REGISTER_ERROR,
        payload: error
    }
}

