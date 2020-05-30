import * as types from './index';

export const bloodRecipientDetail = (id) => {
    return {
        type: types.BLOOD_RECIPIENT_DETAIL,
        id: id
    }
}

export const bloodRecipientDetailSuccess = (response) => {
    return {
        type: types.BLOOD_RECIPIENT_DETAIL_SUCCESS,
        payload: response
    }
}

export const bloodRecipientDetailError = (error) => {
    return {
        type: types.BLOOD_RECIPIENT_DETAIL_ERROR,
        payload: error
    }
}