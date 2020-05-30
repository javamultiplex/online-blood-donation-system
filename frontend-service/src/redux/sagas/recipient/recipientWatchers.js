import { takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/recipient';
import {
    registerRecipient,
    findRecipients,
    deleteRecipientRequest,
    getRecipientDetail
} from './recipientSagas';

export function* watchRegisterRecipientRequest() {
    yield takeLatest(types.BLOOD_RECIPIENT_REGISTER, registerRecipient);
}


export function* watchFindRecipientsRequest() {
    yield takeLatest(types.BLOOD_RECIPIENT_FIND_ALL, findRecipients);
}

export function* watchDeleteRecipientRequest() {
    yield takeLatest(types.BLOOD_RECIPIENT_DELETE, deleteRecipientRequest);
}


export function* watchGetRecipientRequest() {
    yield takeLatest(types.BLOOD_RECIPIENT_DETAIL, getRecipientDetail);
}