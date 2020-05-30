import * as types from './index';

export const bloodRecipientUpdateStatus = (id,status, comment) => {
    return {
        type: types.BLOOD_RECIPIENT_UPDATE_STATUS,
        id: id,
        status: status,
        comment: comment
    }
}

export const bloodRecipientUpdateStatusSuccess = (response) => {
    return {
        type: types.BLOOD_RECIPIENT_UPDATE_STATUS_SUCCESS,
        payload: response
    }
}

export const bloodRecipientUpdateStatusError = (error) => {
    return {
        type: types.BLOOD_RECIPIENT_UPDATE_STATUS_ERROR,
        payload: error
    }
}