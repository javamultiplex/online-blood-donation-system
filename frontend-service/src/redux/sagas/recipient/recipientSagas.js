import { call, put } from 'redux-saga/effects';
import {
    register
} from '../../../service/bloodRecipientService';
import {
    bloodRecipientRegisterError,
    bloodRecipientRegisterSuccess
} from '../../actions/recipient/registerRecipient';

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