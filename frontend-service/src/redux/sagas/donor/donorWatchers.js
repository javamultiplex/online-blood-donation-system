import { takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/donor';
import {
    registerDonor,
    searchDonor,
    findAllActiveDonors,
    findAllInActiveDonors,
    deleteActiveDonor,
    deleteInActiveDonor,
    getDonorDetails,
    updateDonorStatus
} from './donorSagas';

export function* watchRegisterDonorRequest() {
    yield takeLatest(types.BLOOD_DONOR_REGISTER, registerDonor);
}

export function* watchSearchDonorRequest() {
    yield takeLatest(types.BLOOD_DONOR_SEARCH, searchDonor);
}

export function* watchFindAllActiveDonorRequest() {
    yield takeLatest(types.BLOOD_DONOR_ACTIVE_FIND_ALL, findAllActiveDonors);
}

export function* watchDeleteActiveDonorRequest() {
    yield takeLatest(types.BLOOD_DONOR_ACTIVE_DELETE, deleteActiveDonor);
}

export function* watchFindAllInActiveDonorRequest() {
    yield takeLatest(types.BLOOD_DONOR_INACTIVE_FIND_ALL, findAllInActiveDonors);
}

export function* watchDeleteInActiveDonorRequest() {
    yield takeLatest(types.BLOOD_DONOR_INACTIVE_DELETE, deleteInActiveDonor);
}

export function* watchGetDonorRequest() {
    yield takeLatest(types.BLOOD_DONOR_DETAIL, getDonorDetails);
}


export function* watchUpdateDonorStatusRequest() {
    yield takeLatest(types.BLOOD_DONOR_UPDATE_STATUS, updateDonorStatus);
}
