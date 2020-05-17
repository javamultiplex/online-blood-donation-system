import { call, put } from 'redux-saga/effects';
import {
    register
} from '../../../service/bloodDonorService';
import {
    bloodDonorRegisterSuccess
} from '../../actions/donor/registerDonor';

export function* registerDonor(request) {
    try {
        const { data } = yield call(register, request.image, request.payload);
        yield put(bloodDonorRegisterSuccess(data));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while registering blood donor : " + message);
    }
}