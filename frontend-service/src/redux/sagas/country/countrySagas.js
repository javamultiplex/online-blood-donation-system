import { call, put } from 'redux-saga/effects';
import {
    addCountry,
    deleteCountry, 
    getAllCountries
} from '../../../service/countryService';
import {
    addCountrySuccess
} from '../../actions/country/addCountry';
import {
    deleteCountrySuccess,
    getAllCountriesSuccess
} from '../../actions/country/getAndDeleteCountry';

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
        console.error("Error comes while adding country : " + message);
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
        console.error("Error comes while deleting country : " + message);
    }
}

export function* getAllCountriesRequest() {
    try {
        const { data } = yield call(getAllCountries);
        yield put(getAllCountriesSuccess(data));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while getting all the countries : " + message);
    }
}