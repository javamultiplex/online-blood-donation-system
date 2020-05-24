import { call, put } from 'redux-saga/effects';
import {
    register,
    search
} from '../../../service/bloodDonorService';
import {
    bloodDonorRegisterSuccess,
    bloodDonorRegisterError
} from '../../actions/donor/registerDonor';

import {
    bloodDonorSearchSuccess
} from '../../actions/donor/searchDonor';

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
        yield put(bloodDonorRegisterError(message))
        console.error("Error comes while registering blood donor : " + message);
    }
}

export function* searchDonor(request) {
    try {
        const { data } = yield call(search, request.pincode, request.bloodGroup);
        yield put(bloodDonorSearchSuccess(data));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while searching blood donor : " + message);
    }
}