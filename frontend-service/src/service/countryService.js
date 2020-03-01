import axios from 'axios';
export const addCountry = (country) => {
    return axios.post('http://localhost:9090/api/v1/country', country);
}

export const deleteCountry = (countryId) => {
    return axios.delete('http://localhost:9090/api/v1/country/' + countryId);
}