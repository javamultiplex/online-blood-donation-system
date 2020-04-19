import {
    watchAddCountryRequest,
    watchDeleteCountryRequest,
    watchGetAllCountriesRequest
} from './country/countryWatchers';

import {
    watchAddStateRequest,
    watchDeleteStateRequest,
    watchGetAllStatesRequest
} from './state/stateWatchers';

import {
    watchAddCityRequest,
    watchDeleteCityRequest,
    watchGetAllCitiesRequest
} from './city/cityWatchers';
import { fork, all } from 'redux-saga/effects';

export function* rootSaga() {
    yield all(
        [
            fork(watchAddCountryRequest),
            fork(watchDeleteCountryRequest),
            fork(watchGetAllCountriesRequest),
            fork(watchAddStateRequest),
            fork(watchDeleteStateRequest),
            fork(watchGetAllStatesRequest),
            fork(watchAddCityRequest),
            fork(watchDeleteCityRequest),
            fork(watchGetAllCitiesRequest)
        ]
    )
} 