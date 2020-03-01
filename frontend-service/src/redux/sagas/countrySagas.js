import { call, put } from 'redux-saga/effects';
import { addCountry, deleteCountry } from '../../service/countryService';
import {
    addCountrySuccess,
    deleteCountrySuccess
} from '../actions/countryActions';

export function* addCountryRequest(request) {
    try {
        const { data } = yield call(addCountry, request.payload);
        yield put(addCountrySuccess(data));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error message : " + message);
    }
}

export function* deleteCountryRequest(request) {
    try {
        const { data } = yield call(deleteCountry, request.payload);
        yield put(deleteCountrySuccess(data.id));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error message : " + message);
    }
}