import addCountryReducer from './country/addCountryReducer';
import getAndDeleteCountryReducer from './country/getAndDeleteCountryReducer';
import addStateReducer from './state/addStateReducer';
import getAndDeleteStateReducer from './state/getAndDeleteStateReducer';
import addCityReducer from './city/addCityReducer';
import getAndDeleteCityReducer from './city/getAndDeleteCityReducer';
import addAreaReducer from './area/addAreaReducer';
import getAndDeleteAreaReducer from './area/getAndDeleteAreaReducer';
import registerDonorReducer from './donor/registerDonorReducer';
import searchDonorReducer from './donor/searchDonorReducer';
import getAndDeleteActiveDonorReducer from './donor/getAndDeleteActiveDonorReducer';
import getAndDeleteInActiveDonorReducer from './donor/getAndDeleteInActiveDonorReducer';
import getAndUpdateDonorDetailReducer from './donor/getAndUpdateDonorDetailReducer';
import registerRecipientReducer from './recipient/registerRecipientReducer';
import getRecipientsReducer from './recipient/getAndDeleteRecipientReducer';
import getRecipientDetailReducer from './recipient/getRecipientDetailReducer';
import { combineReducers } from 'redux';
export const rootReducer = combineReducers({
    addcountry: addCountryReducer,
    getAndDeleteCountry: getAndDeleteCountryReducer,
    addState: addStateReducer,
    getAndDeleteState: getAndDeleteStateReducer,
    addCity: addCityReducer,
    getAndDeleteCity: getAndDeleteCityReducer,
    addArea: addAreaReducer,
    getAndDeleteArea: getAndDeleteAreaReducer,
    registerDonor: registerDonorReducer,
    searchDonor: searchDonorReducer,
    activeDonor: getAndDeleteActiveDonorReducer,
    inActiveDonor: getAndDeleteInActiveDonorReducer,
    donorDetail: getAndUpdateDonorDetailReducer,
    registerRecipient: registerRecipientReducer,
    recipients: getRecipientsReducer,
    recipientDetail: getRecipientDetailReducer
});