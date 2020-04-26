import axios from 'axios';
export const addArea = (countryId, stateId, cityId, area) => {
    return axios.post(`http://localhost:9090/api/v1/country/${countryId}/state/${stateId}/city/${cityId}/area`, area);
}

export const deleteArea = (countryId, stateId, cityId, areaId) => {
    return axios.delete(`http://localhost:9090/api/v1/country/${countryId}/state/${stateId}/city/${cityId}/area/${areaId}`);
}

export const getAllAreas = (countryId, stateId, cityId) => {
    return axios.get(`http://localhost:9090/api/v1/country/${countryId}/state/${stateId}/city/${cityId}/area`);
}