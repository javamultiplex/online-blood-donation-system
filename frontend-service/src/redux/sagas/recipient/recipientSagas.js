import { call, put } from 'redux-saga/effects';
import {
    register,
    findAll
} from '../../../service/bloodRecipientService';
import {
    bloodRecipientRegisterError,
    bloodRecipientRegisterSuccess
} from '../../actions/recipient/registerRecipient';

import {
    bloodRecipientFindAllSuccess
} from '../../actions/recipient/getRecipients';

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