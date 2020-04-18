import { takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/country';
import {
    addCountryRequest,
    deleteCountryRequest,
    getAllCountriesRequest,
} from './countrySagas';

export function* watchAddCountryRequest() {
    yield takeLatest(types.ADD_COUNTRY, addCountryRequest);
}

export function* watchDeleteCountryRequest() {
    yield takeLatest(types.DELETE_COUNTRY, deleteCountryRequest);
}

export function* watchGetAllCountriesRequest() {
    yield takeLatest(types.GET_ALL_COUNTRIES, getAllCountriesRequest);
}