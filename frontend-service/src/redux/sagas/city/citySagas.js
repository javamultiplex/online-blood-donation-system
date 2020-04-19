import { call, put } from 'redux-saga/effects';
import {
    addCity,
    deleteCity,
    getAllCities
} from '../../../service/cityService';
import { addCitySuccess } from '../../actions/city/addCity';
import {
    getAllCitiesSuccess,
    getAllCitiesError,
    deleteCitySuccess
} from '../../actions/city/getAndDeleteCity';

export function* addCityRequest(request) {
    try {
        const { data } = yield call(addCity, request.countryId, request.stateId, request.city);
        yield put(addCitySuccess(data));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while adding city : " + message);
    }
}

export function* deleteCityRequest(request) {
    try {
        const { data } = yield call(deleteCity, request.countryId, request.stateId, request.cityId);
        yield put(deleteCitySuccess(data.id));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while deleting city : " + message);
    }
}

export function* getAllCitiesRequest(request) {
    try {
        const { data } = yield call(getAllCities, request.countryId, request.stateId);
        yield put(getAllCitiesSuccess(data.cities));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while getting all the cities : " + message);
        yield put(getAllCitiesError(error))
    }
}