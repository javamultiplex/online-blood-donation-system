import { call, put } from 'redux-saga/effects';
import {
    register,
    search,
    findAll
} from '../../../service/bloodDonorService';
import {
    bloodDonorRegisterSuccess,
    bloodDonorRegisterError
} from '../../actions/donor/registerDonor';

import {
    bloodDonorSearchSuccess
} from '../../actions/donor/searchDonor';

import {
    bloodDonorInActiveFindAllSuccess,
    bloodDonorActiveFindAllSuccess
} from '../../actions/donor/getAndDeleteDonor';

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


export function* findAllActiveDonors() {
    try {
        const { data } = yield call(findAll, 'ACTIVE');
        yield put(bloodDonorActiveFindAllSuccess(data));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while getting active blood donors : " + message);
    }
}


export function* findAllInActiveDonors() {
    try {
        const { data } = yield call(findAll, 'INACTIVE');
        yield put(bloodDonorInActiveFindAllSuccess(data));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while getting inactive blood donors : " + message);
    }
}