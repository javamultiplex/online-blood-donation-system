import { takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/state';
import {
    addStateRequest,
    deleteStateRequest,
    getAllStatesRequest
} from './stateSagas';

export function* watchAddStateRequest() {
    yield takeLatest(types.ADD_STATE, addStateRequest);
}

export function* watchDeleteStateRequest() {
    yield takeLatest(types.DELETE_STATE, deleteStateRequest);
}

export function* watchGetAllStatesRequest() {
    yield takeLatest(types.GET_ALL_STATES, getAllStatesRequest);
}