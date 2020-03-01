import countryReducer from './countryReducer';
import { combineReducers } from 'redux';
export const rootReducer = combineReducers({
    country: countryReducer
});