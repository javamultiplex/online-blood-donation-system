import { call, put } from 'redux-saga/effects';
import {
    register,
    findAll,
    deleteRecipient,
    getRecipient,
    updateRecipient
} from '../../../service/bloodRecipientService';
import {
    bloodRecipientRegisterError,
    bloodRecipientRegisterSuccess
} from '../../actions/recipient/registerRecipient';

import {
    bloodRecipientFindAllSuccess,
    bloodRecipientDeleteSuccess
} from '../../actions/recipient/getAndDeleteRecipient';

import { bloodRecipientDetailSuccess } from '../../actions/recipient/getRecipientDetail';

import { bloodRecipientUpdateStatusSuccess } from '../../actions/recipient/updateRecipientStatus';

export function* registerRecipient(request) {
    try {
        const { data } = yield call(register, request.prescription, request.payload);
        yield put(bloodRecipientRegisterSuccess(data));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        yield put(bloodRecipientRegisterError(message))
        console.error("Error comes while registering blood recipient : " + message);
    }
}


export function* findRecipients() {
    try {
        const { data } = yield call(findAll);
        yield put(bloodRecipientFindAllSuccess(data));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while getting blood recipients : " + message);
    }
}


export function* deleteRecipientRequest(request) {
    try {
        const { data } = yield call(deleteRecipient, request.id);
        yield put(bloodRecipientDeleteSuccess(data.id));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while deleting blood recipient : " + message);
    }
}



export function* getRecipientDetail(request) {
    try {
        const { data } = yield call(getRecipient, request.id);
        yield put(bloodRecipientDetailSuccess(data));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while getting blood recipient detail : " + message);
    }
}


export function* updateRecipientStatus(request) {
    try {
        const { data } = yield call(updateRecipient, request.id, request.status, request.comment);
        yield put(bloodRecipientUpdateStatusSuccess(data));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while updating blood recipient status : " + message);
    }
}