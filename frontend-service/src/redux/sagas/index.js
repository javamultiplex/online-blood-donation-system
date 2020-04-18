import {
    watchAddCountryRequest,
    watchDeleteCountryRequest,
    watchGetAllCountriesRequest
} from './country/countryWatchers';
import { fork, all } from 'redux-saga/effects';

export function* rootSaga() {
    yield all(
        [
            fork(watchAddCountryRequest),
            fork(watchDeleteCountryRequest),
            fork(watchGetAllCountriesRequest)
        ]
    )
} 