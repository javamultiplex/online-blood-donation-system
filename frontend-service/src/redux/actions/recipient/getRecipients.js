import * as types from './index';

export const bloodRecipientFindAll = () => {
    return {
        type: types.BLOOD_RECIPIENT_FIND_ALL
    }
}

export const bloodRecipientFindAllSuccess = (response) => {
    return {
        type: types.BLOOD_RECIPIENT_FIND_ALL_SUCCESS,
        payload: response
    }
}

export const bloodRecipientFindAllError = (error) => {
    return {
        type: types.BLOOD_RECIPIENT_FIND_ALL_ERROR,
        payload: error
    }
}