import { takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/area';
import {
    addAreaRequest,
    deleteAreaRequest,
    getAllAreasRequest
} from './areaSaga';

export function* watchAddAreaRequest() {
    yield takeLatest(types.ADD_AREA, addAreaRequest);
}

export function* watchDeleteAreaRequest() {
    yield takeLatest(types.DELETE_AREA, deleteAreaRequest);
}

export function* watchGetAllAreasRequest() {
    yield takeLatest(types.GET_ALL_AREAS, getAllAreasRequest);
}