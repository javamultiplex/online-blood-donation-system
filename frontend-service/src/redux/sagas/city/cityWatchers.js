import { takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/city';
import {
    addCityRequest,
    deleteCityRequest,
    getAllCitiesRequest
} from './citySagas';

export function* watchAddCityRequest() {
    yield takeLatest(types.ADD_CITY, addCityRequest);
}

export function* watchDeleteCityRequest() {
    yield takeLatest(types.DELETE_CITY, deleteCityRequest);
}

export function* watchGetAllCitiesRequest() {
    yield takeLatest(types.GET_ALL_CITIES, getAllCitiesRequest);
}