import axios from 'axios';
export const addState = (countryId, state) => {
    return axios.post(`http://localhost:9090/api/v1/country/${countryId}/state`, state);
}

export const deleteState = (countryId, stateId) => {
    return axios.delete(`http://localhost:9090/api/v1/country/${countryId}/state/${stateId}`);
}

export const getAllStates = (countryId) => {
    return axios.get(`http://localhost:9090/api/v1/country/${countryId}/state`);
}