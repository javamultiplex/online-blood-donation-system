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

export const bloodDonorActiveDelete = (id) => {
    return {
        type: types.BLOOD_DONOR_ACTIVE_DELETE,
        id: id
    }
}

export const bloodDonorActiveDeleteSuccess = (response) => {
    return {
        type: types.BLOOD_DONOR_ACTIVE_DELETE_SUCCESS,
        payload: response
    }
}

export const bloodDonorActiveDeleteError = (error) => {
    return {
        type: types.BLOOD_DONOR_ACTIVE_DELETE_ERROR,
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

export const bloodDonorInActiveDelete = (id) => {
    return {
        type: types.BLOOD_DONOR_INACTIVE_DELETE,
        id: id
    }
}

export const bloodDonorInActiveDeleteSuccess = (response) => {
    return {
        type: types.BLOOD_DONOR_INACTIVE_DELETE_SUCCESS,
        payload: response
    }
}

export const bloodDonorInActiveDeleteError = (error) => {
    return {
        type: types.BLOOD_DONOR_INACTIVE_DELETE_ERROR,
        payload: error
    }
}