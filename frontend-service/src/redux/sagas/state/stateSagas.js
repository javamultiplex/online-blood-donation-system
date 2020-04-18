import { call, put } from 'redux-saga/effects';
import {
    addState,
    deleteState,
    getAllStates
} from '../../../service/stateService';
import { addStateSuccess } from '../../actions/state/addState';
import {
    getAllStatesSuccess,
    deleteStateSuccess
} from '../../actions/state/getAndDeleteState';

export function* addStateRequest(request) {
    try {
        const { data } = yield call(addState, request.countryId, request.state);
        yield put(addStateSuccess(data));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while adding state : " + message);
    }
}

export function* deleteStateRequest(request) {
    try {
        const { data } = yield call(deleteState, request.countryId, request.stateId);
        yield put(deleteStateSuccess(data.id));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while deleting state : " + message);
    }
}

export function* getAllStatesRequest(request) {
    try {
        const { data } = yield call(getAllStates, request.countryId);
        yield put(getAllStatesSuccess(data.states));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while getting all the states : " + message);
    }
}