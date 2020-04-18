import addCountryReducer from './country/addCountryReducer';
import getAndDeleteCountryReducer from './country/getAndDeleteCountryReducer';
import addStateReducer from './state/addStateReducer';
import getAndDeleteStateReducer from './state/getAndDeleteStateReducer';
import { combineReducers } from 'redux';
export const rootReducer = combineReducers({
    addcountry: addCountryReducer,
    getAndDeleteCountry: getAndDeleteCountryReducer,
    addState: addStateReducer,
    getAndDeleteState: getAndDeleteStateReducer
});