import { takeLatest } from 'redux-saga/effects';
import * as types from '../actions';
import {
    addCountryRequest,
    deleteCountryRequest
} from './countrySagas';

export function* watchAddCountryRequest() {
    yield takeLatest(types.ADD_COUNTRY, addCountryRequest);
}

export function* watchDeleteCountryRequest() {
    console.log('hey')
    yield takeLatest(types.DELETE_COUNTRY, deleteCountryRequest);
}