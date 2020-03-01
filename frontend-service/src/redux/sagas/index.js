import {
    watchAddCountryRequest,
    watchDeleteCountryRequest
} from './watchers';
import { fork, all } from 'redux-saga/effects';

export function* rootSaga() {
    yield all(
        [
            fork(watchAddCountryRequest),
            fork(watchDeleteCountryRequest)
        ]
    )
} 