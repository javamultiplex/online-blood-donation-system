import { takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/recipient';
import {
    registerRecipient,
} from './recipientSagas';

export function* watchRegisterRecipientRequest() {
    yield takeLatest(types.BLOOD_RECIPIENT_REGISTER, registerRecipient);
}