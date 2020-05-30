import axios from 'axios';

export const register = (prescription, request) => {
    let formdata = new FormData();
    formdata.append("file", prescription);
    formdata.append("request", JSON.stringify(request));

    return axios.post("http://localhost:8080/api/v1/recipient", formdata, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}