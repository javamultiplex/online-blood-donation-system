import axios from 'axios';
export const addCity = (countryId, stateId, city) => {
    return axios.post(`http://localhost:9090/api/v1/country/${countryId}/state/${stateId}/city`, city);
}

export const deleteCity = (countryId, stateId, cityId) => {
    return axios.delete(`http://localhost:9090/api/v1/country/${countryId}/state/${stateId}/city/${cityId}`);
}

export const getAllCities = (countryId, stateId) => {
    return axios.get(`http://localhost:9090/api/v1/country/${countryId}/state/${stateId}/city`);
}