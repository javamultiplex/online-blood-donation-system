import { takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/donor';
import {
    registerDonor
} from './donorSagas';

export function* watchRegisterDonorRequest() {
    yield takeLatest(types.BLOOD_DONOR_REGISTER, registerDonor);
}