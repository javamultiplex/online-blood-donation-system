import { takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/recipient';
import {
    registerRecipient,
    findRecipients
} from './recipientSagas';

export function* watchRegisterRecipientRequest() {
    yield takeLatest(types.BLOOD_RECIPIENT_REGISTER, registerRecipient);
}


export function* watchFindRecipientsRequest() {
    yield takeLatest(types.BLOOD_RECIPIENT_FIND_ALL, findRecipients);
}