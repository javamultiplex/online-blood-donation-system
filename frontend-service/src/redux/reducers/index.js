import addCountryReducer from './country/addCountryReducer';
import getAndDeleteCountryReducer from './country/getAndDeleteCountryReducer';
import { combineReducers } from 'redux';
export const rootReducer = combineReducers({
    addcountry: addCountryReducer,
    getAndDeleteCountry: getAndDeleteCountryReducer
});